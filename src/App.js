import Card from "./components/Card";
import Socials from "./components/Socials";

function App() {
  return (
    <>
      <main className="Business">
        <div className="Business__card">
          <div className="Business__img"></div>
          <Card />
          <Socials />
        </div>
      </main>
    </>
  );
}

export default App;
