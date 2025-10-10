import { createPortal } from "react-dom";
import { lazy, Suspense } from "react";
import { LazyCopyrightPopup } from "../Popups/LazyPopups";
import useModal from "../../hooks/useModal";
import Preloader from "../Preloader/Preloader";

const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function FooterCopyright() {
  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };
  return (
    <>
      <button
        id="copyright"
        className="footer__copyright-bottom"
        onClick={handleOpen}
      >
        © ООО «Честный Эйб», 2019-2025
      </button>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <LazyCopyrightPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default FooterCopyright;
