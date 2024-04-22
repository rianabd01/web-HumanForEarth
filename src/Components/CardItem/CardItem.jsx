import "./CardItem.scss";
import DeforestationImage from "../../Public/Images/deforestationimage.jpg";
// import { useState } from "react";

function CardItem({ id }) {
  // const [modalPayment, setModalPayment] = useState(false)
  // const getPayment = (forestId)=>{
  //   setModalPayment(true)
  // }
  return (
    <>
      <div className="card_item" id={id}>
        <img src={DeforestationImage} alt="Mangge deforestation" />
        <h3>Mangge Forest</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime odio
          tenetur deserunt consequatur perspiciatis sint iure vel nihil modi
          expedita.
        </p>
        <div className="item_actions">
          <a href="#main">Watch more</a>
          <button>Donate</button>
        </div>
      </div>
    </>
  );
}

export default CardItem;
