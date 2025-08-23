import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Import useSelector
import Carousel from "../../components/Carousel/index";
import Marketing from "../../components/marketing";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SignUpModal from "../../components/SignUpModal/";
import "./style.css";

// Map the Redux state to a prop
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Home = (props) => {
  const { currentUser } = useSelector(mapState); // Get currentUser from Redux
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Check if a user is NOT logged in via Redux state
    if (!currentUser) {
      setIsModalOpen(true);
    }
  }, [currentUser]); // The dependency array now watches for changes in currentUser

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar {...props} />
      <Carousel />
      <Marketing />
      <Footer />
      {isModalOpen && <SignUpModal onClose={handleCloseModal} />}
    </>
  );
};

export default Home;
