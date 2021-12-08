import "./Home.scss";
import WatchList from "../../components/WatchList/WatchList";

function Home({ queueList }) {
  return (
    <section className="home">
      <h3 className="home__title">What will you watch next?</h3>

      <WatchList />
    </section>
  );
}

export default Home;
