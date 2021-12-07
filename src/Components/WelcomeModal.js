import React, { useContext } from "react";
import bird from "../assets/img/bird.svg";
import twitter from "../assets/img/logos_telegram.svg";
import "../assets/styles/modal.scss";
import { Checkbox } from "antd";

import { HeaderContext } from "../context";

const WelcomeModal = ({close}) => {
  const { isConnectWallet, setIsConnectWallet } = useContext(HeaderContext);

  const handleModalClose = () => {
    close(false);
  };

  return (
    <div className="welcomemodal-container">
      <div className="welcome-title Sp24 text-center">
        Welcome to Slamcoin NFT!
      </div>

      <div className="wel-des Inter18 font-grey-light text-center mt-30  mt-sm-25 sm-text-13">
        WARNING: Slamcoin is in beta. Please exercise descretion when using the
        platform and report any bug you may encounter.
      </div>
      <div className="wel-des Inter18 font-grey-light text-center  sm-text-13">
        Joun us on Twitter and Discord!
      </div>

      <div className="ques_img d-flex justify-content-center  mt-30 mt-sm-25 ">
        <img src={bird} />
        <div  className="modal_space"></div>
        <img src={twitter} />
      </div>
      <div className="modal-action d-flex justify-content-between align-items-center mt-sm-25  mt-30">
        <div>
          <Checkbox />
          <span className="Inter18 font-grey-light  sm-text-13 sm-w-100 ml-5 ">Don’t show it again</span>
        </div>
        <button className="wel-btn Sp18 sm-w-100 text-center mt-sm-25 " onClick ={handleModalClose}>Let’s go!</button>
      </div>
    </div>
  );
};

export default WelcomeModal;
