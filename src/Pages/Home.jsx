import Converter from "../components/Converter";
import SalesIcons from "../components/SalesIcons";
import InfoTabs from "../components/InfoTabs";

function Home() {
  return (
    <>
      <div className="heroBackground mb-5 py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h1 className="homeH1">Swap Fast, Reach Far</h1>
            <h2 className="homeH2">
              Instant currency conversion for a connected world.
            </h2>
          </div>
          <Converter />
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
