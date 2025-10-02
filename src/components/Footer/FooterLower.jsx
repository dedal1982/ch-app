function FooterLower() {
  return (
    <div className="footer__copyright">
      <ul className="footer__copyright-item">
        <li>
          <a href="#" tabIndex={0} id="terms" className="footer__link">
            «Пользовательское соглашение»
          </a>
        </li>
        <li>
          <a href="#" tabIndex={0} id="privacy" className="footer__link">
            «Политика конфедициальности»
          </a>
        </li>
      </ul>
      <button id="copyright" className="footer__copyright-bottom">
        © ООО «Честный Эйб», 2019-2025
      </button>
    </div>
  );
}

export default FooterLower;
