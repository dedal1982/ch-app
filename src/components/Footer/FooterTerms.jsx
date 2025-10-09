import { createPortal } from "react-dom";
import TermsPopup from "../Popups/TermsPopup";
import useModal from "../../hooks/useModal";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterTerms() {
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
          id="terms"
          className="footer__link"
          onClick={handleOpen}
        >
          «Пользовательское соглашение»
        </a>
      </li>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <TermsPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default FooterTerms;
