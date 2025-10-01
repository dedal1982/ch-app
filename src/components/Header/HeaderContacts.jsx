import { useState } from "react";

function HeaderContacts() {
  const [contactsText, setContactsText] = useState("Контакты");

  const handleMouseOver = (name) => {
    setContactsText(name);
  };

  const handleMouseOut = () => {
    setContactsText("Контакты");
  };

  return (
    <div className="header__contacts">
      <div id="header-contacts" className="header__contacts-name">
        {contactsText}
      </div>
      <ul className="header__contacts-phones">
        <li>
          <span />
          <a
            href="tel:+79165718989"
            data-name="Сайты"
            onMouseOver={() => handleMouseOver("Сайты")}
            onMouseOut={handleMouseOut}
          >
            +7 (916) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a
            href="tel:+79255718989"
            data-name="Игры"
            onMouseOver={() => handleMouseOver("Игры")}
            onMouseOut={handleMouseOut}
          >
            +7 (925) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a
            href="tel:+79645718989"
            data-name="Тестирование"
            onMouseOver={() => handleMouseOver("Тестирование")}
            onMouseOut={handleMouseOut}
          >
            +7 (964) 571-89-89
          </a>
        </li>
        <li>
          <span />
          <a
            href="tel:+79855718989"
            data-name="Симбиоз"
            onMouseOver={() => handleMouseOver("Симбиоз")}
            onMouseOut={handleMouseOut}
          >
            +7 (985) 571-89-89
          </a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderContacts;
