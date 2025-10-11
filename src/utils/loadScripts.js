const loadScripts = () => {
  if (
    !document.querySelector('script[src="/dist/assets/js/vendor.xNFqPlwU.js"]')
  ) {
    const script = document.createElement("script");
    script.src = "/dist/assets/js/vendor.xNFqPlwU.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }
  if (!document.querySelector('script[src="/dist/assets/js/ui.DW_XR9iV.js"]')) {
    const script = document.createElement("script");
    script.src = "/dist/assets/js/ui.DW_XR9iV.js";
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);
  }
};

export default loadScripts;
