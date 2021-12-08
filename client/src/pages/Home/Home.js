import "../Home/Home.scss";
import WatchList from "../../components/WatchList/WatchList";

function Home({ queueList }) {
  return (
    <section className="home">
      <h3>What will you watch next?</h3>
      <WatchList />
    </section>
  );
}

export default Home;
