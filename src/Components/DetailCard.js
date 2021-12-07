import { EyeOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../context";
import Button from "./Button";
import SmallButton from "./SmallButton";
import eye from "../assets/img/eye.png";
import { useHistory  } from 'react-router-dom'



function useWindowSize() {
  
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
   
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}


const DetailCard = ({ url, name, price, des}) => {
  const [windowSize, setWindowSize] = useState();
  const history = useHistory();

  const size = useWindowSize();

  const {theme, setTheme } =
    useContext(HeaderContext);
  const ShowInfo = (name) => {
   history.push("/info");
  };

  useEffect(() => {

    var size = window.innerWidth;
    setWindowSize(size);
  }, []);
  useEffect(() => {
    if (size.width >= 1220) {
      setTheme(1);
    }
  }, [size]);

  return (
    <>
      {theme == 1 ? (
        <div className="image-card-contaier">
          <div className="create-option-thumb-img">
            <img src={url} className="create-option-thumb-img1" />
            <img src={url} className="create-option-thumb-img2" />
          </div>
          <div className="card-down">
            <div className="Sp24 font-dark">{name}</div>
            <div className="Inter18 font-grey-light mt-15">{des}</div>
            <div className="custom_flex_row_between mt-10">
              <p className="Inter18">Price:</p>
              <p className="Inter18 font-blue InterB">{price} ETH</p>
            </div>
            <hr className="font-light" style={{ margin: "0px 0px 20px 0px" }} />
            <div className="coin-card-action">
              <div onClick={() => ShowInfo(name)}>
                <Button
                  label="Buy Now"
                  textColor="white"
                  bg="primary"
                  borderColor="primary"
                />
              </div>
              <div className="d-flex flex-row align-items-center font-grey-light Inter18">
                <img src={eye} />
                <p className="my-0 mx-1 Inter18 font-grey-light">1.453</p>
                <span
                  className="d-flex flex-row align-items-center"
                  style={{ marginLeft: "10px" }}
                >
                  <HeartFilled className="font-red" />
                  <span className="font-red mx-1">12</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="image-card-contaier-sm">
          <div className="create-option-thumb-img-sm">
            <img src={url} className="create-option-thumb-img1-sm" />
            <img src={url} className="create-option-thumb-img2-sm" />
          </div>
          <div className="card-down-sm">
            <div className="Sp12 font-dark">{name}</div>
            <div className="Inter9 font-grey-light mt-8">{des}</div>
            <div
              className="custom_flex_row_between mt-8"
              style={{ height: "9px" }}
            >
              <p className="Inter9">Price:</p>
              <p className="Inter9 font-blue InterB">{price} ETH</p>
            </div>
            <hr className="font-light" style={{ margin: "0px 0px 5px 0px" }} />
            <div className="coin-card-action">
              <div onClick={() => ShowInfo(name)}>
                <SmallButton
                  label="Buy Now"
                  textColor="white"
                  bg="primary"
                  borderColor="primary"
                />
              </div>
              <div className="d-flex flex-row align-items-center font-grey-light Inter9">
                <img src={eye} style={{ width: 11, height: 7 }} />
                <p className="my-0  Inter9 font-grey-light">1.453</p>
                <span
                  className="d-flex flex-row align-items-center"
                  style={{ margin: "0 2px;" }}
                >
                  <HeartFilled
                    className="font-red"
                    style={{ width: 9, marginLeft: 3 }}
                  />
                  <span className="font-red">12</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailCard;
