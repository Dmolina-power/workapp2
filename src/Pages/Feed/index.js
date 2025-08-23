import React from "react";
import Chat from "../../components/Chat"
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import "./style.css";

const feed = (props) => {
  return (
    <div className="feed-container">
      <Navbar />
      <main className="main-content">
        <Chat />
      </main>
    </div>
  );
}

export default feed;
