import { Layout } from "antd";
import TopContent from "../Components/TopContent";
import DetailCard from "../Components/DetailCard";
import CardContainer from "../Layout/CardContainer";
import { data as cardList } from "../datebase.json";

const { Content } = Layout;

const Home = ({ ...props }) => {
  return (
    <div>
      <TopContent />
      <CardContainer>
      <div className="list-content">
      {cardList.map((card, index) => {
          return (
            <div className="card-item" key={index}>
            <DetailCard
              name={card.name}
              price={card.price}
              url={card.url}
              des={card.des}
            />
            </div>
          );
        })}
      </div>
      </CardContainer>
    </div>
  );
};

export default Home;
