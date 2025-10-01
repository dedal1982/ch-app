import "./Main.css";
import SocialLinks from "./SocialLinks";
import MainInner from "./MainInner";
import HeaderMabile from "../Header/HeaderMabile";

function Main() {
  return (
    <div className="main">
      <div className="main__wrapper holder">
        <MainInner />
        <SocialLinks />
        <HeaderMabile />
      </div>
    </div>
  );
}

export default Main;
