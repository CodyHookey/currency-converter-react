import SalesIcons from "../components/SalesIcons";
import InfoTabs from "../components/InfoTabs";

function Home() {
  return (
    <>
      <div className="heroBackground">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div className="container">
        <SalesIcons />
        <InfoTabs />
      </div>
    </>
  );
}

export default Home;
