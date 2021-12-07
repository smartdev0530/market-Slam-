import React, { useContext } from "react";
import close from "../assets/img/close.svg";
import meta from "../assets/img/metawallet.svg";
import trust from "../assets/img/trustwallet.svg";
import wallet from "../assets/img/wallet.svg";
import Userwallet from "../assets/img/user-wallet.png";
import "../assets/styles/modal.scss";
import { HeaderContext } from "../context";

import { useLocation ,useHistory  } from 'react-router-dom'

const ConnectModal = () => {
  const { isConnectWallet, setIsConnectWallet } = useContext(HeaderContext);
  const history = useHistory();
  const handleModalClose = () => {
    setIsConnectWallet(false);
  };


  const handleLogin =() =>{
    history.push('/login');
    setIsConnectWallet(false);
  }

  return (
    <div className="modal-container">
      <div className="modal-close" onClick={handleModalClose}>
        <img src={close} />
      </div>
      <div className="modal-title Sp24">Connect to a Wallet</div>
      <div className="item-wallet mt-50">
        <div className="wallet-name Inter18">Metamask</div>
        <img className="wallet-img" src={meta} />
      </div>
      <div className="item-wallet mt-20">
        <div className="wallet-name Inter18">TrustWallet</div>
        <img className="wallet-img" src={trust} />
      </div>
      <div className="item-wallet mt-20">
        <div className="wallet-name Inter18">TrustWallet</div>
        <img className="wallet-img" src={wallet} style={{ padding: "5px 0" }} />
      </div>
      <div className="item-wallet mt-20" onClick={handleLogin}>
        <div className="wallet-name Inter18">Connect via Login</div>
        <img className="wallet-img" src={Userwallet} />
      </div>

      <div className="Inter18 font-grey-light sm-Inter9 text-center mt-20 mt-sm-15">Don’t have an account yet? <span className="font-blue">Register</span></div>
    </div>
  );
};

export default ConnectModal;
