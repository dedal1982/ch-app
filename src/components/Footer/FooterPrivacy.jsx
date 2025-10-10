import { useNavigate, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { lazy, Suspense } from "react";
import { LazyPrivacyPopup } from "../Popups/LazyPopups";
import Preloader from "../Preloader/Preloader";

const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterPrivacy() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    // Навигация на маршрут /privacy
    navigate("/privacy");
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
          id="privacy"
          className="footer__link"
          onClick={handleOpen}
        >
          «Политика конфедициальности»
        </a>
      </li>
      {location.pathname === "/privacy" && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <LazyPrivacyPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default FooterPrivacy;
