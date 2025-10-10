import { useState } from "react";
import { createPortal } from "react-dom";
import { lazy, Suspense } from "react";
import { LazyContactsPopup } from "../Popups/LazyPopups";
import useModal from "../../hooks/useModal";
import Preloader from "../Preloader/Preloader";

const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function HeaderMabile() {
  const [contactsText, setContactsText] = useState("Контакты");

  const handleMouseOver = (name) => {
    setContactsText(name);
  };

  const handleMouseOut = () => {
    setContactsText("Контакты");
  };

  const handleContactsText = (name) => {
    setContactsText(name);
  };

  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };
  return (
    <>
      <div
        className="header__contacts header__contacts-mobile"
        tabIndex={0}
        onClick={handleOpen}
        aria-label="Кими"
      >
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
              onFocus={() => handleContactsText("Сайты")}
              onBlur={handleMouseOut}
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
              onFocus={() => handleContactsText("Игры")}
              onBlur={handleMouseOut}
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
              onFocus={() => handleContactsText("Тестирование")}
              onBlur={handleMouseOut}
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
              onFocus={() => handleContactsText("Симбиоз")}
              onBlur={handleMouseOut}
            >
              +7 (985) 571-89-89
            </a>
          </li>
        </ul>
      </div>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <LazyContactsPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default HeaderMabile;
