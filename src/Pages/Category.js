import React, { useContext,useState ,useEffect} from "react";
import { HeaderContext } from "../context";

import CategoryContainer from "../Layout/CategoryContainer";
import "../assets/styles/info.scss";
import ConnectModal from "../Components/ConnectModal";
import WelcomeModal from '../Components/WelcomeModal'
import { useLocation, useHistory } from "react-router-dom";

const Category = ({ ...props }) => {
  const { open, isConnectWallet } = useContext(HeaderContext);
  const [openWelcome,setOpenWelcome] = useState(false);

  const history = useHistory();

  console.log('the history is',history)

  useEffect(()=>{
    setOpenWelcome(true);
  },[])
  

  const handleClose =(status) =>{

    console.log('this is status',status)
    setOpenWelcome(false)
  }

  return (
    <div>
      <div className={`${(open || isConnectWallet || openWelcome) ? "is-open" : ""}`}></div>
      <div className={`${(open || isConnectWallet || openWelcome) ? "blue-apply" : ""}`}>
        <CategoryContainer></CategoryContainer>
      </div>
      {isConnectWallet && <ConnectModal />}
      {
        openWelcome && <WelcomeModal close ={handleClose}/>
      }
    </div>
  );
};

export default Category;
