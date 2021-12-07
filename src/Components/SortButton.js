import { useState } from "react";
import Button from "./Button";
import trending from "../assets/img/trending.svg";
import art from "../assets/img/art.svg";
import game from "../assets/img/game.svg";
import music from "../assets/img/music.svg";
import photography from "../assets/img/photograph.svg";
import punks from "../assets/img/punks.svg";
import check from "../assets/img/check.svg";
import search from "../assets/img/search.png";

const SortButton = ({ children, label, icon ,openSort,close, handleButtonClick}) => {

  const [list,setList] =useState([
    { name: "Trending", url: trending, status: true, },
    { name: "Art", url: art, status: false },
    { name: "Games", url: game, status: false },
    { name: "Music", url: music, status: false },
    { name: "Photography", url: photography, status: false },
    { name: "Punks", url: punks, status: false },
  ])
  const handleCancel = () => {
    close(true)
  };

  const handleCheck =(name) => {
    // setCheckName(setCheckName);
    var tmp = list.map((item)=> {
      console.log(item,name)
      item.name == name.name ?  item.status =true : item.status =false;
      return item
    }) ;
    console.log('this is tmp',tmp)
    close(true);
  }


  return (
    <div className="with-icon-container">
      <button
        className="with-icon-btn bg-white d-flex flex-row align-items-center justify-items-around sort-button"
        onClick= {handleButtonClick}
      >
        <span style={{ marginRight: "15px" }} className="font-grey-light">
          {" "}
          {children}{" "}
        </span>
        {label} {icon}
      </button>
      {(openSort.name ==='Category' && openSort.name === label) && (
        <div className="sub_cateory">
          {list.map((item, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              className="d-flex flex-row align-items-center mt-15 justify-content-between"
            >
              <div className="d-flex  flex-row align-items-center" onClick={()=>handleCheck(item)}>
                <img src={item.url} />
                <div className="Inter18 ml-10">{item.name}</div>
              </div>
              {item.status&& <img src={check} />}
            </div>
          ))}
        </div>
      )}

      {(openSort.name ==='Collections' && openSort.name === label) && (
        <div className="sub_sort">
          <div className="custom_form custom_flex_row_center mt-15 ">
            <input
              size="15"
              type="text"
              className="cus_input1 Inter16"
              placeholder="Search in collections"
            />
            <img src={search} style={{ position: "absolute", left: "15px" }} />
          </div>

          <div className="custom_flex_row_around" style={{ marginTop: "23px" }}>
            <Button
              label="Apply"
              bg="primary"
              textColor="white"
              borderColor="primary"
            />
            <div onClick={handleCancel}>
              <Button
                label="Cancel"
                textColor="primary"
                bg="white"
                borderColor="primary"
              />
            </div>
          </div>
        </div>
      )}
      {(openSort.name === 'Price range' && openSort.name === label) && (
        <div className="sub_sort">
          <div className="custom_flex_row_around" style={{marginTop:'8px'}}>
            <div className="custom_form custom_flex_row_center">
              <input
                size="15"
                type="text"
                className="cus_input Inter16"
                placeholder="From"
              />
              <p className="cus_txt Inter16">ETH</p>
            </div>
            <p className="mx-2 mt-3 Inter18">to</p>
            <div className="custom_form custom_flex_row_center myl-1">
              <input
                size="15"
                type="text"
                className="cus_input Inter16"
                placeholder="To"
              />
              <p className="cus_txt Inter16">ETH</p>
            </div>
          </div>
          <div className="custom_flex_row_around" style={{ marginTop: "23px" }}>
            <Button
              label="Apply"
              bg="primary"
              textColor="white"
              borderColor="primary"
            />
            <div onClick={handleCancel}>
              <Button
                label="Cancel"
                textColor="primary"
                bg="white"
                borderColor="primary"
              />
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default SortButton;
