import React from "react";
import Chat from "../../components/Chat"
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar";

const feed = (props) => {
  return (
    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
<Navbar/>
<Sidebar/>
       <Chat/>
    </main>
  );
}

export default feed;
