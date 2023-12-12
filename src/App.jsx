import "./App.css";
import logo from "./assets/images/palmBigAlone.png"
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
    <NavBar/>
      <section className="header">
        <img src={logo} alt="" />
        <h1>SLAcademy</h1>
      </section>
    </>
  );
}

export default App;
