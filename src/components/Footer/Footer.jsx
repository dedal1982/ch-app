import "./Footer.css";
import FooterRequisites from "./FooterRequisites";
import FooterLower from "./FooterLower";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper holder">
        <FooterRequisites />
        <FooterLower />
      </div>
    </footer>
  );
}

export default Footer;
