import FooterTerms from "./FooterTerms";
import FooterPrivacy from "./FooterPrivacy";
import FooterCopyright from "./FooterCopyright";

function FooterLower() {
  return (
    <div className="footer__copyright">
      <ul className="footer__copyright-item">
        <FooterTerms />
        <FooterPrivacy />
      </ul>
      <FooterCopyright />
    </div>
  );
}

export default FooterLower;
