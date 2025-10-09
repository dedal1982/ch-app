import "./Footer.css";
import { useState } from "react";
import { createPortal } from "react-dom";
import RequisitesPopup from "../Popups/RequisitesPopup";
import useModal from "../../hooks/useModal";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterRrequisites() {
  const [active, setActive] = useState(false);

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
        id="requisites"
        className="footer__top"
        tabIndex={0}
        onClick={handleOpen}
      >
        {/* Контакты с требованиями */}
        <div className="footer__contacts">
          <ul
            className={`footer__contacts-list requisites-hover ${
              active ? "active" : ""
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <li>
              Наименование юридического лица: ООО &laquo;Честный Эйб&raquo;
            </li>
            <li>Юридический адрес: 143980, Московская обл.,</li>
            <li>г. Балашиха, ул. Октябрьская (Железнодорожный мкр.),</li>
            <li>д. 33, Бдок А, помещение V-13, комната 1</li>
          </ul>
          <ul
            className={`footer__contacts-list requisites-hover ${
              active ? "active" : ""
            }`}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <li>ОГРН: 1195081055575</li>
            <li>ИНН: 5012100464</li>
            <li>КПП: 501201001</li>
          </ul>
        </div>

        {/* Банковские реквизиты */}
        <ul
          className={`footer__contacts-list bank-list requisites-hover ${
            active ? "active" : ""
          }`}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <li>Банковские реквизиты:</li>
          <li>Банк: АО &laquo;АЛЬФА-БАНК&raquo;</li>
          <li>Расчетный счет: 40702810902630003334</li>
          <li>Корреспондентский счет: 30101810200000000593</li>
          <li>БИК: 044525593</li>
        </ul>
      </div>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <RequisitesPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default FooterRrequisites;
