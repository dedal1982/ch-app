import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import FooterTerms from "./components/Footer/FooterTerms";
import FooterPrivacy from "./components/Footer/FooterPrivacy";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import CookieConsent from "./components/CookieConsent/CookieConsent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/terms" element={<FooterTerms />} />
        <Route path="/privacy" element={<FooterPrivacy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </>
  );
}

export default App;
