import bear from "../assets/img/bear.png";
import Article from "../Components/Article";
import { Layout, Avatar } from "antd";
import user from "../assets/img/user.png";
import MintButton from "../Components/MintButton";
import "../assets/styles/info.scss";
import eye from "../assets/img/eye.png";
import { HeartFilled } from "@ant-design/icons";
const InfoPage = ({ ...props }) => {
  return (
    <div className="info-container mt-80 d-flex flex-column">
      <div className="d-flex flex-row article">
        <img src={bear} className="info-card-img" />
        <div className="info-txt" style={{marginTop:'5px'}}>
          <div className="Sp48 SPFontB sm-Sp18">Doge</div>
          <p className="Inter18 font-grey-light mt-sm-10 mt-30 mb-10 sm-Inter9">
            Collection “Doge everywhere
          </p>
          <div className="Inter18 font-grey-light d-flex flex-row align-items-center sm-Inter9 justify-content-beetween">
            <div className="d-flex flex-row align-items-center">
              <p className="m-0">Owned by</p>
              <div className="font-blue">&nbsp;you&nbsp;</div>
              <div className="ml-10">
                <Avatar src={user} />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-end eye-container" >
              <img src={eye}  className="eye"/>
              <p className="my-0 mx-1">1.453&nbsp;</p>
              <HeartFilled className="font-red" />
              <p className="my-0 mx-1  font-red">12</p>
            </div>

          </div>
          <hr className="font-light mt-20" />
          <div className="Sp24 mt-20 sm-Sp12">
            Prepared on sale for <span className="font-blue">0.084 ETH</span>
            <span className="font-grey-light Sp16 sm-Sp9"> ($232,14)</span>
          </div>
          <div className="link-address mt-40 mt-sm-15 ">
            <div className="Sp24 sm-Sp12">Link to the project</div>
            <a
              className="Inter18 font-blue sm-Inter9 mt-10"
              href="https://your-link.com/projects/doge"
            >
              https://your-link.com/projects/doge
            </a>
          </div>
        </div>
      </div>
      <div className="description d-flex flex-column">
        <Article
          title="Description"
          des="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        />
        <Article
          title="Hashtags"
          des="#doge #dogecoin #meme #3d #blender #animation #nft #lorem #ipsum #loremIpsum #lorem #ipsum #loremIpsum #lorem #ipsum #loremIpsum #lorem #ipsum #loremIpsum"
        />
      </div>
      <div className="article-action">
        <MintButton
          label="Mint"
          bg="primary"
          borderColor="primary"
          textColor="white"
        />
        <span className="ml-20">
          <MintButton
            label="Edit"
            bg="white"
            borderColor="primary"
            textColor="primary"
          />
        </span>
      </div>
    </div>
  );
};

export default InfoPage;
