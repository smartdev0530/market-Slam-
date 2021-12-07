import { Tabs } from "antd";
import { TagOutlined ,HighlightOutlined,SafetyCertificateOutlined  ,AppleOutlined, DollarOutlined ,EyeInvisibleOutlined ,HeartOutlined  } from "@ant-design/icons";
import Icon1 from '../assets/img/icon1.png'
import Icon2 from '../assets/img/icon2.png'
import Icon3 from '../assets/img/icon3.png'


const { TabPane } = Tabs;

const CardContainer = ({ children }) => {
  return (
    <div>
      <div className="">
        <Tabs defaultActiveKey="1" centered size="large">
          <TabPane
            tab={
              <span className="Sp24 custom_flex_center">
              <img src={Icon1} className="mr-10"/>
                Minted <span className="Inter16 font-grey-light ml-5">0</span>
              </span>
            }
            key="1"
          >
            <div>{children}</div>
          </TabPane>
          <TabPane
            tab="Created"
            tab={
              <span className="Sp24 d-flex custom_flex_center">
               <img src={Icon2} className="mr-10"/>
                Created  <span className="Inter16 font-grey-light ml-5">1</span>
              </span>
            }
            key="2"
          >
            <div >{children}</div>
          </TabPane>
          <TabPane
            tab="Owned"
            tab={
              <span className="Sp24">
               <img src={Icon3} className="mr-10"/>
                Owned <span className="Inter16 font-grey-light ml-5">1</span>
              </span>
            }
            key="3"
          >
            <div >{children}</div>
          </TabPane>
          <TabPane
            tab="Sold"
            tab={
              <span className="Sp24 custom_flex_center">
                <DollarOutlined  style={{marginRight:'10px'}}/>
                Sold <span className="Inter16 font-grey-light ml-5">0</span>
              </span>
            }
            key="4"
          >
            <div >{children}</div>
          </TabPane>
          <TabPane
            tab="Hidden"
            tab={
              <span className="Sp24 custom_flex_center">
                <EyeInvisibleOutlined style={{marginRight:'10px'}} />
                Hidden <span className="Inter16 font-grey-light ml-5">0</span>
              </span>
            }
            key="5"
          >
            <div >{children}</div>
          </TabPane>
          <TabPane
            tab="Favorited"
            tab={
              <span className="Sp24 custom_flex_center">
                <HeartOutlined  style={{marginRight:'10px'}}/>
                Favorited <span className="Inter16 font-grey-light ml-5">12</span>
              </span>
            }
            key="6"
          >
            <div>{children}</div>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default CardContainer;
