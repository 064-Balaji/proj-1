import FAQ from "./pages/Faq";
import FeedbackSlider from "./pages/FeedbackSlider";
import Footer from "./pages/Footer";
import FooterTwo from "./pages/FooterTwo";
import Journey from "./pages/Journey";
import NavBar from "./pages/NavBar";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Provide from "./pages/Provide";
import SocialMedia from "./pages/SocialMedia";

function App() {
  return (
    <div className="font-regular">
      <NavBar />
      <PageOne />
      <PageTwo />
      <Provide />
      <Journey />
      <FAQ />
      <SocialMedia />
      <FeedbackSlider />
      <Footer />
      <FooterTwo />
    </div>
  );
}

export default App;
