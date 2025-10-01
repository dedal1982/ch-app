import "./Footer.css";
import FooterRrequisites from "./FooterRrequisites";
import FooterLower from "./FooterLower";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper holder">
        <FooterRrequisites />
        <FooterLower />
      </div>
    </footer>
  );
}

export default Footer;
