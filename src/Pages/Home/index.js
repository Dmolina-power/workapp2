import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/Carousel/index";
import Marketing from "../../components/marketing";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AuthModal from "../../components/AuthModal/"; // Import the new modal component
import SignIn from "../../components/SignIn"; // Import the SignIn component
import Signup from "../../components/Signup"; // Import the Signup component
import "./style.css";

// Map the Redux user state to a prop
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Home = (props) => {
  const { currentUser } = useSelector(mapState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('signin'); // 'signin' or 'signup'

  // The modal opens only if no user is logged in
  useEffect(() => {
    if (!currentUser) {
      setIsModalOpen(true);
    }
  }, [currentUser]);

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  // Function to switch between sign-in and sign-up forms
  const toggleAuthMode = (mode) => {
    setAuthMode(mode);
  };

  // Conditionally render the correct authentication form
  const renderAuthForm = () => {
    if (authMode === 'signin') {
      return <SignIn onClose={handleCloseModal} onToggleMode={toggleAuthMode} />;
    } else {
      return <Signup onClose={handleCloseModal} onToggleMode={toggleAuthMode} />;
    }
  };

  return (
    <>
      <div className="home-content-wrapper">
        <Navbar {...props} />
        <Carousel />
        <Marketing />
        <Footer />
      </div>
      {/* Conditionally render the modal */}
      {isModalOpen && (
        <AuthModal onClose={handleCloseModal}>
          {renderAuthForm()}
        </AuthModal>
      )}
    </>
  );
};

export default Home;