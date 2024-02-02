import React, { useState, useEffect } from "react";
import "./Navbar.css";
import IcellLogo from "../../Assets/images/Icell4.png";
import Logo from "../../Assets/images/i3_0.png";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoMdMenu } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar({onDataChange}) {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()
  // const openInfoModal = () => setInfoModalOpen(!isInfoModalOpen);
  //   const closeInfoModal = () => setInfoModalOpen(false);
  const moneyLeft = 12;
  const Logout = () => {

localStorage.removeItem('icell_pitcher_code');


localStorage.removeItem('icell_pitcher_userId');
navigate("/")
    
  }
  
  const openInfoModal = () => {
    // const newData = event.target.value;
    setInfoModalOpen(!isInfoModalOpen);

    // Call the callback function to update parent state
    onDataChange(isInfoModalOpen);
  };

  const openMenu = () => setMenuOpen(!isMenuOpen);
  //   const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isInfoModalOpen &&
        !event.target.closest(".info-btn") &&
        !event.target.closest(".modal")
      ) {
        openInfoModal();
      }

      if (
        isMenuOpen &&
        !event.target.closest(".menu-btn") &&
        !event.target.closest(".menu")
      ) {
        openMenu();
      }
    };

 
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isInfoModalOpen, isMenuOpen]);

  return (
    <div>
      <div className="nav">
        <div onClick={openInfoModal}>
          <HiOutlineInformationCircle className="info-btn" />
        </div>
        <div>
          <img src={IcellLogo} alt="Icell" width={30} />
        </div>
        <div onClick={openMenu}>
          <IoMdMenu className="menu-btn" />
        </div>
      </div>

      {/* Info Modal */}
      {isInfoModalOpen && (
        <div className="modal-overlay" style={{filter:"blur(0) !important"}}>
          <div className="modal">
            <div className="modal-header">
              <h2>Instructions</h2>
            </div>
            <ul className="modal-content">
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
              <li>Don't share this app with your friends</li>
            </ul>
          </div>
        </div>
      )}

      {/* Menu */}
      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-heading">
            <div className="logoname">
              <h2 className="-logo--name">Stocks Up</h2>
              <div>
                <img src={Logo} alt="stocksUp-logo" width={40} height={40} />
              </div>
            </div>
            {/* <div>Where Ideas Take Flight, Investors Unite!</div> */}
          </div>
          <div className="menu">
            <div className="menu-options">
              <a href="#Portfolio" className="menu-item"><span><FaHome/></span><span>Home</span></a>
              <a href="#AudienceRanking" className="menu-item"> <FaRankingStar/><span>Audience Ranking</span></a>
              <a href="#ParticipantRanking" className="menu-item"> <FaRankingStar/><span> Participant Ranking</span></a>
              <a href="#UserProfile" className="menu-item"><FaUser/><span>User Portfolio</span></a>
              <a onClick={()=> Logout()}  className="menu-item"><FaSignOutAlt/><span>Log Out</span></a>
            </div>
            {/* <span onClick={openMenu} className="close-btn">
              &times;
            </span> */}
          </div>
          <button className="balance">Balance: <span className="amount">${moneyLeft}</span></button>
          <div className="powered-menu">
            Powered by <span className="icell-menu">Innovation Cell</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
