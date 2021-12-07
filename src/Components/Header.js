import { useState, useContext, useEffect } from "react";
import { Layout, Menu, Avatar, Image } from "antd";
import user from "../assets/img/user.png";
import logo from "../assets/img/sm_logo.png";
import dollar from "../assets/img/dollar.svg";
import group from "../assets/img/icon.svg";
import HeaderButton from "./HeaderButton";
import "../assets/styles/header.scss";
import search from "../assets/img/search.png";
import close from "../assets/img/close.svg";
import { HeaderContext } from "../context";
import allIcon from "../assets/img/all.svg";

import { useLocation ,useHistory  } from 'react-router-dom'

const { Header } = Layout;
const TopBar = ({children}) => {
  const { open, setOpen, isCreate, setIsCreate ,theme,setTheme,setIsConnectWallet} = useContext(HeaderContext);
  const [url,setUrl] =useState('');
  const history = useHistory();
  const Localhistory = useLocation();
  
  const handleCreate = () => {
    history.push("/create");
    setIsCreate(true);
  };

  useEffect(()=>{
    var path =Localhistory.pathname;
    setUrl(path);
    useLocation.pathname!='/create' ? setIsCreate(false) : setIsCreate(true);
  },[])

  const handleShowList = () => {
    setOpen(true);
  };
  const closeList = () => {
    setOpen(false);
  };                                                                                                                                                                                                                                                                                                                                                 
  const changeTheme =(id) =>{
    setTheme(id)
  }
  const handleConnectWallet =() =>
  {
    setOpen(false)
    setIsConnectWallet(true)
  }

  return (
    <div id="slam">
    <div  className="header-Container">
      <Header>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={2}>
          <div className="d-flex flex-row w-100 mt-2 justify-content-between">
            <div className="" onClick={() =>history.push("home")}>
              <img src={logo} preview={"false"} className="logo" />
            </div>
            <div className="d-flex flex-row  align-items-center left-header-nav left-header-items">
              
              {url==="/category" ? (<div className="theme d-flex flex-row align-items-center">
                <div className={` ${theme==1?'set-bg':''} w-50 h-100 d-flex justify-content-center align-items-center`} onClick={()=>changeTheme(1)}><div style={{width:'13px',height:'13px',background:'#A9ADBD'}}></div></div>
                <span className={` ${theme==2?'set-bg':''} w-50   h-100 d-flex justify-content-center`} onClick={()=>changeTheme(2)}><img src={allIcon} width={13}/></span>
              </div>) :''}
              
              <Menu.Item key="1">
                <div className="mx-2 more " onClick={handleShowList}>
                  <img src={group} />
                </div>
              </Menu.Item>
              <div className="header-item">
                <Menu.Item key="2">
                  <div className="mx-2">
                    {" "}
                    <img src={dollar} />
                  </div>
                </Menu.Item>
              </div>
              <div className="header-item">
                <Menu.Item key="3">
                  {" "}
                  <Avatar src={user} style={{ width: 32, margin: 4 }} />
                </Menu.Item>
              </div>
              {history.location.pathname != '/create' && (
                <div className="header-item" onClick={handleCreate}>
                  <Menu.Item key="4">
                    <HeaderButton
                      label="Create"
                      bg="white"
                      borderColor="black"
                    />
                  </Menu.Item>
                </div>
              )}
              <div className="header-item" onClick={handleConnectWallet}>
                <Menu.Item key="5">
                  <HeaderButton
                    label="Connect wallet"
                    bg="black"
                    textColor="white"
                    borderColor="black"
                  />
                </Menu.Item>
              </div>
            </div>
          </div>
        </Menu>
      </Header>
      {open ? (
        <div className="header-down d-flex flex-column">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <Avatar src={user} style={{ width: 64, margin: 4, height: 64 }} />
            <div onClick={closeList}>
              <img src={close} />
            </div>
          </div>
          <div className="custom_form custom_flex_row_center mt-30 ">
            <input
              size="15"
              type="text"
              className="cus_input1 Inter16"
              placeholder="Search in collections"
            />
            <img src={search} style={{ position: "absolute", left: "15px" }} />
          </div>
          <div className="Sp24 mt-25">My Profile</div>
          <div className="Sp24">My wallet</div>
          {isCreate && (
            <div className="mt-30" onClick={handleCreate}>
              <HeaderButton label="Create" bg="white" borderColor="black" />
            </div>
          )}
          <div className="mt-20"  onClick={handleConnectWallet}>
            <HeaderButton
              label="Connect wallet"
              bg="black"
              textColor="white"
              borderColor="black"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
    {children}
    </div>
  );
};

export default TopBar;
