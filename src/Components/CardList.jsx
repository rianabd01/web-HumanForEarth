import "../Style/CardList.scss";
import CardItem from "./CardItem";

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
