import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div id="requisites" className="footer__top">
            <div className="footer__contacts">
              <ul className="footer__contacts-list requisites-hover">
                <li>Наименование юридического лица: ООО «Честный Эйб»</li>
                <li>Юридический адрес: 143980, Московская обл.,</li>
                <li>г. Балашиха, ул. Октябрьская (Железнодорожный мкр.),</li>
                <li>д. 33, Бдок А, помещение V-13, комната 1</li>
              </ul>
              <ul className="footer__contacts-list requisites-hover">
                <li>ОГРН: 1195081055575</li>
                <li>ИНН: 5012100464</li>
                <li>КПП: 501201001</li>
              </ul>
            </div>
            <ul className="footer__contacts-list bank-list requisites-hover">
              <li>Банковские реквизиты:</li>
              <li>Банк: АО «АЛЬФА-БАНК»</li>
              <li>Расчетный счет: 40702810902630003334</li>
              <li>Корреспондентский счет: 30101810200000000593</li>
              <li>БИК: 044525593</li>
            </ul>
          </div>
          <div className="footer__copyright">
            <ul className="footer__copyright-item">
              <li id="terms">«Пользовательское соглашение»</li>
              <li id="privacy">«Политика конфедициальности»</li>
            </ul>
            <p id="copyright" className="footer__copyright-bottom">
              © ООО «Честный Эйб», 2019-2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
