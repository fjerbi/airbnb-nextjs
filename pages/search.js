import Header from "../components/Header";
import Footer from "../components/Footer";
function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays from 5 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays In London</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap ">
            <p className="button">Cancelation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Number of Participants</p>
            <p className="button">Rooms</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
