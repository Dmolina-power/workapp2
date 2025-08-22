import React, { useRef, useState, useEffect } from 'react';
import 'firebase/firestore';
import 'firebase/analytics';
import 'firebase/auth';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import './style.css'; // Import the external CSS file

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat(){
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    // Use a state variable to hold the current user to handle the asynchronous nature of Firebase Auth
    const [currentUser, setCurrentUser] = useState(auth.currentUser);

    useEffect(() => {
        // This listener will fire whenever the auth state changes (e.g., user signs in or out)
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);


    const sendMessage = async (e) => {
        e.preventDefault();

        // Check if currentUser is defined before accessing its properties
        if (!currentUser) {
            console.error("User is not authenticated. Please log in.");
            return;
        }

        const { uid, photoURL } = currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid,
            photoURL
        })

        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className="chat-container">
            <main className="chat-messages">
                {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} currentUserUid={currentUser?.uid} />)}
                <span ref={dummy}></span>
            </main>
            <form className="chat-input" onSubmit={sendMessage}>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="say something nice"
                />
                <button type="submit" disabled={!formValue}>
                    🕊️
                </button>
            </form>
        </div>
    );
}

function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    // We now get the current user's uid from props, which is safe to use
    const currentUserUid = props.currentUserUid;
  
    const messageClass = uid === currentUserUid ? 'my-message' : 'other-message';
    // Check if uid is defined before calling substring
    const finalPhotoURL = photoURL || `https://placehold.co/40x40/5c7c9a/FFFFFF?text=${uid ? uid.substring(0, 1).toUpperCase() : '?'}`;

    return (
        <div className={`chat-message ${messageClass}`}>
            <div className="message-content">
                {messageClass === 'other-message' && (
                    <img src={finalPhotoURL} alt="User Avatar" className="chat-avatar" />
                )}
                <div className="message-bubble">
                    <p>{text}</p>
                </div>
                {messageClass === 'my-message' && (
                    <img src={finalPhotoURL} alt="User Avatar" className="chat-avatar" />
                )}
            </div>
        </div>
    );
}

export default Chat;