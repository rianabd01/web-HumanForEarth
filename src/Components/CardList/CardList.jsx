import "./CardList.scss";
import CardItem from "../CardItem/CardItem.jsx";

function CardList() {
  return (
    <>
      <section className="container">
        <div className="card_items">
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </div>
      </section>
    </>
  );
}

export default CardList;
