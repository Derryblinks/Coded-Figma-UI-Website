import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import OurClients from "./components/OurClients";
import Community from "./components/Community";
import MiddleInfo from "./components/MiddleInfo";
import LineInfo from "./components/LineInfo";
import Illustration from "./components/Illustration";
import Timsmithpage from "./components/Timsmithpage";
import Cardbutton from "./components/Cardbutton";
import Footer from "./components/Footer";
import MainFooter from "./components/MainFooter";



function App() {
  return (
    <>
    <div className="App">     
      <Header />
      <LandingPage />
      <OurClients />
      <Community />
      <MiddleInfo />
      <LineInfo/>
      <Illustration/>
      <Timsmithpage />
      <Cardbutton />      
      <Footer/>
      <MainFooter/>
    </div>
    </>
  );
}

export default App;
