function HeaderMabile() {
  return (
    <div className="header__contacts header__contacts-mobile">
      <div id="header-contacts" className="header__contacts-name">
        Контакты
      </div>
      <ul className="header__contacts-phones">
        <li>
          <span />
          <a href="tel:+79165718989" data-name="Сайты">
            +7 (916) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a href="tel:+79255718989" data-name="Игры">
            +7 (925) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a href="tel:+79645718989" data-name="Тестирование">
            +7 (964) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a href="tel:+79855718989" data-name="Симбиоз">
            +7 (985) 571-89-89
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderMabile;
