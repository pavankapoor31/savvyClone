import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card.js";
import Modal from "../Modal/Modal.js";
import { Link , NavLink} from "react-router-dom";
const axios = require("axios").default;
// Products data
function Products() {
  const [Show, setShow] = useState(false);
  const [ModalData, setModalData] = useState([{}]);
  const [ActiveFilter, setActiveFilter] = useState(0)
  const onClose = () => {
    setShow(!Show);
  };
  const showModal = (data) => {
    console.log("data", data);
    setModalData(data);
    setShow(true);
  };
  const filterContent = (val) => {
    setActiveFilter(val);
    if (val == 0) {
      setTempRes(Res);
    } else if (val == 3) {
      // 1 for 
      let temp = Res.filter((e) => {
        if (e.category.name == "Electronics") return true;

      });
      setTempRes(temp);
    } else if (val == 2) {
      let temp = Res.filter((e) => {
        if (e.category.name == "Others") return true;
      });
      setTempRes(temp);
    } else if (val == 1) {
      let temp = Res.filter((e) => {
        if (e.category.name == "Clothes") return true;
      });
      setTempRes(temp);
    }
  };
  const [Res, setRes] = useState([]);
  const [TempRes, setTempRes] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then(function (response) {
        setRes(response.data);
        setTempRes(response.data);
        console.log(response);
      })
      .catch(function () {
        console.log("Fetch failed");
      });
  }, []);
  return (
    <div className="products ">
      <div className="products__filters">
          <span className={ActiveFilter==0? 'active products__filter':'products__filter'} onClick={(e) => filterContent(0)}>
            View All
          </span>

        <span 
        className={`products__filter ${ActiveFilter===1 && 'active'}`}
         onClick={(e) => filterContent(1)}>
          Travel
        </span>

        <span 
        className={`products__filter ${ActiveFilter===2 && 'active'}`}
        onClick={(e) => filterContent(2)}
        >
          Others
        </span>

        <span className={`products__filter ${ActiveFilter===3 && 'active'}`} onClick={(e) => filterContent(3)}>
          Electronics
        </span>
      </div>
      <div className="products__grid">
        {TempRes.slice(0, 15).map((item) => {
          return (
            <Card
              key={item.id}
              pName={item.title}
              pPrice={item.price}
              pImg={item.images[0]}
              showModal={showModal}
            />
          );
        })}
      </div>
      <Modal
        show={Show}
        onClose={onClose}
        pName={ModalData.pName}
        pPrice={ModalData.pPrice}
        pImg={ModalData.pImg}
      ></Modal>
    </div>
  );
}

export default Products;
