import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card.js";
import dataJson from "./../../assets/data.json";
import Modal from "../Modal/Modal.js";
// const axios = require("axios").default;
// Products data
function Products() {
  const [Res] = useState(dataJson.data);
  const [Show, setShow] = useState(false);
  const [ ModalData, setModalData] = useState([{}]);
  const onClose = ()=>{
    setShow(!Show);
  }
  const showModal = (data)=>{
    console.log("data",data)
    setModalData(data);
    setShow(true);
  }

  useEffect(() => {
    // axios
    //   .get("https://api.escuelajs.co/api/v1/products")
    //   .then(function (response) {
    //     setRes(response.data);
    //     console.log(response);
    //   })
    //   .catch(function () {
    //     console.log("Fetch failed");
    //   });
    // Res.splice(15,);
  }, []);
  return (
    <div className="products ">
      <div className="products__filters">
        <span className="products__filter active"> View All</span>
        <span className="products__filter">Travel</span>
        <span className="products__filter">Education</span>
        <span className="products__filter">Electronics</span>
      </div>
      <div className="products__grid">
        {Res.map((item) => {
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
      <Modal show={Show} onClose={onClose} pName={ModalData.pName} pPrice={ModalData.pPrice} pImg={ModalData.pImg}></Modal>

    </div>
  );
}

export default Products;
