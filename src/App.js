import Infor from "./component/Infor";
import NavBar from "./component/NavBar";
import './App.css';
import PngTojpg from "./component/PngTojpg";
import JpgTopng from "./component/JpgTopng";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Heictojpg from "./component/Heictojpg";
import Webptojpeg from "./component/Webptojpeg";
import JpegtoWord from "./component/JpegtoWord";
import CrtdData from "./component/CrtdData";
import Imagetotext from "./component/Imagetotext";
import Texttoimage from "./component/Texttoimage";
import Facicon from "./component/Facicon";
function App() {
  return (
    <>


      <BrowserRouter>
        <Infor />
        <NavBar />
        <Routes>
          <Route path="/PngTojpg" element={<PngTojpg />} />
          <Route path="/JpgTopng" element={<JpgTopng />} />
          <Route path="/Heictojpg" element={<Heictojpg />} />
          <Route path="/Webptojpeg" element={<Webptojpeg />} />
          <Route path="/JpegtoWord" element={<JpegtoWord />} />
          <Route path="/Imagetotext" element={<Imagetotext />} />
          <Route path="/Texttoimage" element={<Texttoimage />} />
          <Route path="/Facicon" element={<Facicon />} />
        </Routes>
        <CrtdData />
      </BrowserRouter>

    </>
  );
}

export default App;
