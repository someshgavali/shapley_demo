import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Heading from "./components/Heading/Heading";
import CompoTwo from "./components/CompoTwo/CompoTwo";
import Compothree from "./components/CompoThree/Compothree";
import CompoFour from "./components/CompoFour/CompoFour";
import CompoFive from "./components/CompoFive/CompoFive";
import ImgCompo from "./components/ImgCompo/ImgCompo";
import TextCompo from "./components/TextCompo/TextCompo";
import CompoSix from "./components/CompoSix/CompoSix";
import CompoSeven from "./components/CompoSeven/CompoSeven";
import CompoEight from "./components/CompoEight/CompoEight";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Heading />
      <CompoTwo/>
      <Compothree/>
      <CompoFour/>
      <CompoFive/>
      <ImgCompo/>
      <TextCompo/>
      <CompoSix/>
      <CompoSeven/>
      <CompoEight/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
