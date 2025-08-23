import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "../../components/Carousel/index";
import Marketing from "../../components/marketing";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import SignUpModal from "../../components/SignUpModal/";
import "./style.css";
// Correct path

import classNames from 'classnames';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Home = (props) => {
  const { currentUser } = useSelector(mapState);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!currentUser) {
      setIsModalOpen(true);
    }
  }, [currentUser]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const mainContentClasses = classNames({
    'home-content-wrapper': true, // Add this class to a new wrapper div
    'blur-effect': isModalOpen,
  });

  return (
    
    <div className={mainContentClasses}>
      <Navbar {...props} />
      <Carousel />
      <Marketing />
      <Footer />
      {isModalOpen && <SignUpModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Home;