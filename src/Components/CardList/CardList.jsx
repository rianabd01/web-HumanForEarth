import "./CardList.scss";
// import DonateModal from "../DonateModal/DonateModal.jsx";
import CardItem from "../CardItem/CardItem.jsx";

function CardList() {
  return (
    <>
      {/* <DonateModal /> */}
      <section className="container">
        <div className="card_items">
          <CardItem id="1" />
          <CardItem id="2" />
          <CardItem id="3" />
          <CardItem id="4" />
          <CardItem id="5" />
          <CardItem id="6" />
        </div>
      </section>
    </>
  );
}

export default CardList;
