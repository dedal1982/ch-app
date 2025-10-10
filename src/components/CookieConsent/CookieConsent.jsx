import "./CookieConsent.css";
import { useState, useEffect, useCallback } from "react";
import RejectIcon from "../../assets/images/Cookie/RejectIcon.svg";
import AcceptIcon from "../../assets/images/Cookie/AcceptIcon.svg";
import CookieIcon from "../../assets/images/Cookie/CookieIcon.svg";

// Вынесем функции для работы с куки за пределы компонента
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

  // Предзагрузка изображения CookieIcon
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = CookieIcon;
    link.as = "image";
    document.head.appendChild(link);
  }, []);

  const loadGoogleAnalytics = useCallback(() => {
    if (gaLoaded) return; // чтобы не загружать повторно
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

  const handleCookieConsent = (isAccepted) => {
    setCookie(
      "cookieConsent",
      isAccepted ? "true" : "false",
      isAccepted ? 365 : undefined
    );
    setIsVisible(false);
    if (isAccepted && !gaLoaded) {
      loadGoogleAnalytics();
    }
  };

  // Проверка куки при монтировании
  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (consentCookie === "true") {
      loadGoogleAnalytics();
    } else if (consentCookie === "false") {
      // Пользователь отказал, ничего не делаем
    } else {
      setIsVisible(true);
    }
  }, [loadGoogleAnalytics]);

  if (!isVisible) return null;

  return (
    <div id="cookieConsent">
      <div className="cookie-title">
        <img src={CookieIcon} alt="Мы используем cookie" />
      </div>
      <div className="cookie-buttons">
        <button id="acceptBtn" onClick={() => handleCookieConsent(true)}>
          <img src={AcceptIcon} alt="Принять" />
        </button>
        <button id="declineBtn" onClick={() => handleCookieConsent(false)}>
          <img src={RejectIcon} alt="Отклонить" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
