import "./CookieConsent.css";
import { useState, useEffect, useCallback } from "react";

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";").map((c) => c.trim());
  return (
    cookies.find((c) => c.startsWith(nameEQ))?.substring(nameEQ.length) || null
  );
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [gaLoaded, setGaLoaded] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const [CookieIconImg, setCookieIconImg] = useState(null);
  const [AcceptIconImg, setAcceptIconImg] = useState(null);
  const [RejectIconImg, setRejectIconImg] = useState(null);

  // Мемоизированная функция для загрузки GA
  const loadGoogleAnalytics = useCallback(() => {
    if (gaLoaded) return;
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-1P81G0D66K";
    script.async = true;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-1P81G0D66K");
      setGaLoaded(true);
    };
    document.head.appendChild(script);
  }, [gaLoaded]);

  // Проверка куки при монтировании
  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (consentCookie === "true") {
      // Пользователь уже дал согласие — загружаем GA
      loadGoogleAnalytics();
    } else if (consentCookie === "false") {
      // Пользователь отказал — окно не показываем
    } else {
      // Куки нет — показываем окно
      setIsVisible(true);
      setImagesLoaded(true);
    }
  }, [loadGoogleAnalytics]); // <-- добавлено тут

  // Загрузка изображений
  useEffect(() => {
    if (imagesLoaded) {
      import("../../assets/images/Cookie/CookieIcon.svg").then((module) =>
        setCookieIconImg(module.default)
      );
      import("../../assets/images/Cookie/AcceptIcon.svg").then((module) =>
        setAcceptIconImg(module.default)
      );
      import("../../assets/images/Cookie/RejectIcon.svg").then((module) =>
        setRejectIconImg(module.default)
      );
    }
  }, [imagesLoaded]);

  // Предзагрузка CookieIcon
  useEffect(() => {
    if (imagesLoaded && CookieIconImg) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = CookieIconImg;
      link.as = "image";
      document.head.appendChild(link);
    }
  }, [imagesLoaded, CookieIconImg]);

  const handleAccept = () => {
    setCookie("cookieConsent", "true", 365); // сохраняем согласие на 1 год
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    setCookie("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div id="cookieConsent">
      <div className="cookie-title">
        {imagesLoaded && CookieIconImg && (
          <img src={CookieIconImg} alt="Мы используем cookie" />
        )}
      </div>
      <div className="cookie-buttons">
        <button id="acceptBtn" onClick={handleAccept}>
          {imagesLoaded && AcceptIconImg && (
            <img src={AcceptIconImg} alt="Принять" />
          )}
        </button>
        <button id="declineBtn" onClick={handleDecline}>
          {imagesLoaded && RejectIconImg && (
            <img src={RejectIconImg} alt="Отклонить" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
