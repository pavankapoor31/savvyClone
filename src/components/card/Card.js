// Contains image text and button
import React from 'react'
function Card(props) {
  const {pName,pPrice,pImg}=props;

  return (
    <div className='card' key={pName&&pPrice}>
      <div className="image_container">
        <img src={pImg} alt="" className='product_image'/>
      </div>
        <div className="product_desc">
            <span className='product_name'> {pName} </span>
            <div className='product_price'>  <span className='font-bold'>₹{pPrice}</span> /mo </div>
        </div>
        <button onClick={()=>props.showModal(props)}> View Product </button>
    </div>
  )
}

export default Card