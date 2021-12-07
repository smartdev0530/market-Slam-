import bg from "../assets/img/rectangle.png";

const TopContent = ({ name, price }) => {
  return (
    <div>
      <div  className="bg-white mt-80 top-container"
      >
        <img src={bg} className="img-fluid top-img" />
        <div className="custom_flex_row_center">
          <div className="detail-img"></div>
        </div>
        <div className="custom_flex_column mmt-70">
          <p className="Sp48">Milano</p>
          <p className="Inter18">93043f2...ec84</p>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
