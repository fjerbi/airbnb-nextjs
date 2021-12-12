import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import { useState } from "react";
import ReactMapGL from "react-map-gl";

function CardDetails() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });

  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays In Tunis</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Number of Participants</p>
            <p className="button">Rooms</p>
            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col">
            <InfoCard
              img="https://links.papareact.com/4cj"
              description="Magna et mollit esse ipsum est tempor consectetur cillum culpa veniam aliquip aute duis ipsum. Qui sunt do ex et cillum ad culpa eu sint ipsum dolore magna et. Anim officia adipisicing voluptate do culpa dolore ad. Commodo eiusmod aute consectetur dolor consequat exercitation ipsum. Irure elit reprehenderit officia consequat incididunt adipisicing. Do sit amet sunt cupidatat."
              location="Tunisia"
              title="Hotel "
              price="25"
              star="5"
            />
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[900px]">
          <ReactMapGL
            mapStyle="mapbox://styles/fjerbiengineer/ckx1sbf7v23ku14mjc1ko1w4y"
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default CardDetails;
