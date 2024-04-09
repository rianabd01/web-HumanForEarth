import TabSlider from "./TabSlider";
import "../Style/Main.scss";
import CardList from "./CardList";

function HomeContents() {
  return (
    <main id="main">
      <TabSlider />
      <CardList />
    </main>
  );
}

export default HomeContents;
