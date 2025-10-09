import { createPortal } from "react-dom";
import PrivacyPopup from "../Popups/PrivacyPopup";
import useModal from "../../hooks/useModal";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterPrivacy() {
  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };
  return (
    <>
      <li>
        <a
          href="#"
          tabIndex={0}
          id="privacy"
          className="footer__link"
          onClick={handleOpen}
        >
          «Политика конфедициальности»
        </a>
      </li>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <PrivacyPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default FooterPrivacy;
