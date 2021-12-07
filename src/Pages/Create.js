import { useRef } from "react";
import { Layout, Form, Upload, Switch, Badge ,Input } from "antd";
import "../assets/styles/create.scss";
import ether from "../assets/img/ether.svg";
import { QuestionCircleOutlined } from "@ant-design/icons";
import polygon from "../assets/img/polygon.png";
import Phantom from "../assets/img/Phantom.png";
import Dwon from "../assets/img/down.svg";
import React, { useState, useContext } from "react";
import {HeaderContext} from '../context';
import ConnectModal from "../Components/ConnectModal";

const { TextArea } = Input;

const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};

const Create = ({ ...props }) => {
  const [inputRef, setInputFocus] = useFocus();
  const [showList, setShowList] = useState(false);
  const [isHelper,setIsHelper] = useState(false);

  const {open,setOpen,isConnectWallet,setIsConnectWallet} = useContext(HeaderContext);

  const handleShowList = () => {
    setShowList(!showList);
  };


  const handleEnter =() => {
    setIsHelper(true)
  }

  const handleLeave=() => {
    setIsHelper(false)
    setOpen(false)
  }
  return (
    <Layout>
      <div className={`${(open || isConnectWallet )? "is-open": ""}`}></div>
      <div className= {`${(open || isConnectWallet) ? "blue-apply": ""} mt-80 create-container`} style={{ marginBottom: "80px" }}>
        <div
          className="Sp36 create-title-bg SPFontB"
        >
          Create new item
        </div>
        <div className="Sp24 mt-30 title-sm" style={{ fontFamily: "SFProDisplayB" }}>
          Image, Video, Audio, or 3D Model
        </div>
        <div className="Inter18 font-grey-light mt-17 des-sm mt-sm-10">
          Files types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MO3, WAV, IFF,
          GLB, GLTF.
        </div>

        <div className="mt-25 sm-drag1" style={{ height: "260px", width: "440px" }}>
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-text Inter18 text-center sm-drag-txt">
                Drag your files here or{" "}
                <span className="font-blue">browse</span>
              </p>
              <p className=" sm-drag-text ant-upload-hint Inter12 font-grey-light text-center">
                Max. File Size: 100MB
              </p>
            </Upload.Dragger>
          </Form.Item>
        </div>
        <div className="Sp24 SPFont mt-30 title-sm mt-sm-30">Preview Image</div>
        <div className="font-grey-light Inter18 mt-10 des-sm">
          Files types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MO3, WAV, IFF,
          GLB, GLTF.
        </div>

        <div className="mt-25 sm-drag2" style={{ height: "188px", width: "186px" }}>
          <Form.Item
            valuePropName="fileList"
            getValueFromEvent={normFile}
            noStyle
          >
            <Upload.Dragger name="files" action="/upload.do">
              <p
                className="ant-upload-text Inter18 text-center sm-drag-txt"
                style={{ padding: "0 13px" }}
              >
                Drag your files here or{" "}
                <span className="font-blue">browse</span>
              </p>
              <p
                className="sm-drag-text  ant-upload-hint Inter12 font-grey-light text-center"
                style={{ padding: "0 13px" }}
              >
               Max. File Size: 10MB
              </p>
            </Upload.Dragger>
          </Form.Item>
        </div>
        <div className="SPFont Sp24 mt-30 title-sm mt-sm-30">Name</div>
        <div className="Inter18 mt-10 font-grey-light des-sm">
          Files types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MO3, WAV, IFF,
          GLB, GLTF. Max size: 100MB
        </div>
        <input className="create-input mt-25 Inter18 sm-input" placeholder="Item Name" />
        <div className="SPFont Sp24 mt-47 title-sm mt-sm-30">External Link</div>
        <div
          className="Inter18 mt-10 font-grey-light des-sm"
          style={{ lineHeight: "30px" }}
        >
          Slamcoin will include a link to this URL on this item’s detail page,
          so that userse can click to learn more about it, You are welcome to
          link yto your own webpage with more details.
        </div>
        <input
          className="create-input mt-15 Inter18 sm-input"
          placeholder="https://your-link.com/"
        />
        <div className="SPFont Sp24 mt-50 title-sm mt-sm-30">Description</div>
        <div className="Inter18 mt-10 font-grey-light des-sm">
          The description will be included on the item’s detail page underneath
          its image.
        </div>
        <div className="mt-15 des-sm"><TextArea rows={4} placeholder="Provide a detailed description of your item" className="p-24-30 p-sm-15-12 des-sm"/></div>
        <div className="SPFont Sp24 mt-47 title-sm mt-sm-30">Price</div>
        <div
          className="Inter18 mt-10 font-grey-light des-sm"
          style={{ lineHeight: "30px" }}
        >
          Slamcoin will include a link to this URL on this item’s detail page,
          so that userse can click to learn more about it, You are welcome to
          link yto your own webpage with more details.
        </div>

        <div className="crpyt-input-container mt-25 " ref={inputRef}>
          <input
            className="crpyt-inputA Inter18 sm-crpyt-inputA"
            placeholder="Enter Price for one piece"
          ></input>
          <div className="input-icons-Ethe Inter18 sm-input-icons-Ethe">
            <img src={ether} style={{ marginRight: "15px" }} className="sm-ether-img"/>
            <span style={{ marginRight: "7px" }} className="ether-txt">ETH</span>
            <img  src={Dwon} className="sm-down"/>
            <span style={{ marginLeft: "50px" }} className="sm-price">~0$</span>
          </div>
        </div>
        <div
          className="Inter18 mt-10 font-grey-light des-sm mt-sm-67 mt-105"
         
        >
          Service fee: <span className="font-dark" style={{fontWeight:600}}>5%</span>
        </div>
        <div className="Inter18 mt-10 font-grey-light des-sm">
          You’ll recieve: <span className="font-dark" style={{fontWeight:600}}>0 ETH</span>
        </div>
        <div className="SPFontB Sp24 mt-47 title-sm mt-sm-30">Add Hashtags</div>
        <div className="Inter18 mt-10 font-grey-light des-sm">
          Add hastags, so users will be able to find your work by key words
        </div>
        <input
          className="create-input mt-15 Inter18 sm-input"
          placeholder="Add #hastag about your art"
        />

        <div className="badge-container" >
          <Badge offset={[10,-4]}
            count={
              <div className="mt-50 mt-sm-30"><QuestionCircleOutlined
                style={{ color: "#a9adbd" }} onMouseEnter ={handleEnter} onMouseLeave={handleLeave}
              /></div>
            }
          >
            <div className="SPFontB Sp24 mt-50 title-sm mt-sm-30" style={{ left: "154px" }}>
              Free Minting
            </div>
          </Badge>
          {isHelper&&<div className="des-sm Inter18 badge-helper text-center font-grey-light">
            Your item won’t be minted in blockchain. Your NFT will be stored for
            further minting by buyer.
          </div>} 
          
        </div>
        <div className="Inter18 mt-10 font-grey-light des-sm">
          Buyer will pay gas fees for minting
        </div>
        <div className="mt-25 mt-sm-10">
          <Form.Item valuePropName="checked">
            <Switch defaultChecked={true} />
          </Form.Item>
        </div>
        <div
          className="SPFontB Sp24 mt-50 title-sm mt-sm-30"
          style={{ position: "relative" }}
        >
          Blockchain
        </div>
        <div className="crpyt-input-container mt-25" onClick={handleShowList}>
          <div className="currency d-flex align-items-center sm-currency">
            <div className="d-flex align-items-center">
              <img src={ether} className="sm-etherIcon" />
              <div className="Inter18 ml-15 sm-ether-txt des-sm">Etherium</div>
            </div>
            <div className="input-icons">
              <img src={Dwon} className="sm-down"/>
          </div>
          </div>
          {showList ? (
            <div className="crypt-input-list sm-crypt-input-list">
              <div>
                <div className="d-flex align-items-center">
                  <img src={polygon} className="sm-etherIcon"/>
                  <div className="d-flex flex-column ml-15">
                    <div className="Inter18 des-sm">Polygon</div>
                    <div className="Inter15 font-grey-light sm-inter7">
                      A fast, gas-free blockchain experience that works with
                      Etherium
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <div className="d-flex align-items-center">
                  <img src={Phantom} className="sm-etherIcon"/>
                  <div className="d-flex flex-column ml-15">
                    <div className="Inter18 des-sm">Phantom</div>
                    <div className="Inter15 font-grey-light sm-inter7">
                      A fast, gas-free blockchain experience that works with
                      Etherium
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <button className={`card-create-btn Sp18 sm-card-create-btn ${showList ? "mt-292":"mt-105"} `}>Create</button>
      </div>
      {
        isConnectWallet&& <ConnectModal />
      }
    </Layout>
  );
};

export default Create;
