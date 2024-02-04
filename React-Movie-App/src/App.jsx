import Nav from "./Sections/Nav";
import DisplayTab from "./Sections/DisplayTab";

const App = () => (
  <main className="relative">
    <Nav />

    <section className="padding">
      <DisplayTab/>
    </section>
  </main>
);
export default App;
