import { useCallback, useEffect, useState } from "react";
import { BarsOutlined } from "@ant-design/icons";
import SortButton from "../Components/SortButton";
import DropdownButton from "../Components/DropdownButton";
import CategpryListContainer from "./CategpryListContainer";
import { data as cardList } from "../datebase.json";
import dollar from "../assets/img/dollars.svg";
import allIcon from "../assets/img/all.svg";
import DetailCard from "../Components/DetailCard";
import filterIcon from "../assets/img/filter.svg";
import "../assets/styles/category_list.scss";
const sortNames = ["Category", "Collections", "Price range"];

const CategoryContainer = () => {
  const [openName, setOpenName] = useState([false, false]);
  const [openSort, setOpenSort] = useState({ name: null, id: null });

  const [sortKind, setSortKind] = useState([
    {
      name: "All items",
      data: [
        { name: "All", status: true },
        { name: "3D Models", status: false },
        { name: "Pictures", status: false },
        { name: "Music", status: false },
        { name: "Photographies", status: false },
        { name: "Videos", status: false },
      ],
    },
    {
      name: "Sort by",
      data: [
        { name: "Recently added", status: true },
        { name: "Price: Low to High", status: false },
        { name: "Price: High to Low", status: false },
      ],
    },
  ]);

  const changeSortContent = (label, id) => {
    var original = sortKind.map((item, index) => {
      if (item.name === label) {
        const array = item.data.map((ele, num) => {
          num === id ? (ele.status = true) : (ele.status = false);
          return ele;
        });
        return { name: label, data: array };
      } else {
        return item;
      }
    });
    setSortKind(original);
    setOpenName("");
  };

  var subList = [];
  var temp = [];

  const handleOpen = (name, id) => {
    setOpenName("");
    console.log("handleOpen", openSort, "aaa");
    if (openSort.name != name) {
      return setOpenSort({ name, id });
    }
    setOpenSort({ name: null, id: null });
  };

  const handleClose = (state) => {
    setOpenSort({ name: null, id: null });
  };

  const handleSortButton = (label) => {
    setOpenName(label);
    setOpenSort({ name: null, id: null });
  };
  const handleTotalClose = (e) => {
    if (openSort.name) setOpenSort({});
    if (openName) setOpenName("");
  };

  const handleOpenButtonDiv = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleTotalClose}>
      <div
        style={{ marginTop: "100px" }}
        className="bg-white w-100 d-flex flex-row justify-content-between cateogy-container"
      >
        <div className="d-flex flex-row sort-button-container" style={{marginLeft:'-10px'}}>
          {sortNames.map((item, index) => {
            return index != 2 ? (
              <div key={index} onClick={handleOpenButtonDiv}>
                <SortButton
                  label={item}
                  openSort={openSort}
                  close={handleClose}
                  handleButtonClick={() => handleOpen(item, index)}
                >
                  <BarsOutlined />
                </SortButton>
              </div>
            ) : (
              <div key={index} onClick={handleOpenButtonDiv}>
                <SortButton
                  label={item}
                  openSort={openSort}
                  close={handleClose}
                  handleButtonClick={() => handleOpen(item, index)}
                >
                  <img src={dollar} />
                </SortButton>
              </div>
            );
          })}
        </div>
        <div className="d-flex flex-row sort-btn-area">
          {sortKind.map((item, index) => {
            return index == 0 ? (
              <div key={index}>
                <DropdownButton
                  label={item.name}
                  data={item.data}
                  isClick={openName == item.name ? true : false}
                  setSortContent={changeSortContent}
                  handleSortButton={handleSortButton}
                >
                  <img src={allIcon} />
                </DropdownButton>
              </div>
            ) : (
              <div key={index}>
                <DropdownButton
                  label={item.name}
                  data={item.data}
                  isClick={openName == item.name ? true : false}
                  setSortContent={changeSortContent}
                  handleSortButton={handleSortButton}
                >
                  <img src={filterIcon} />
                </DropdownButton>
              </div>
            );
          })}
        </div>
      </div>
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
    </div>
  );
};

export default CategoryContainer;
