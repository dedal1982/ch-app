import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import TermsPopup from "../Popups/TermsPopup";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterTerms() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    // Навигация на маршрут /privacy
    navigate("/terms");
  };

  const handleClose = () => {
    // Возврат на главную страницу
    navigate("/", { replace: true });
  };
  return (
    <>
      <li>
        <a
          href=""
          tabIndex={0}
          id="terms"
          className="footer__link"
          onClick={handleOpen}
        >
          «Пользовательское соглашение»
        </a>
      </li>
      {location.pathname === "/terms" && (
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
