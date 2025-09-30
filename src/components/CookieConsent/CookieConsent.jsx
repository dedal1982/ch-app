import "./CookieConsent.css";

import { useState, useEffect, useCallback } from "react";
import RejectIcon from "../../assets/images/Cookie/RejectIcon.svg";
import AcceptIcon from "../../assets/images/Cookie/AcceptIcon.svg";
import CookieIcon from "../../assets/images/Cookie/CookieIcon.svg";

const CookieConsent = () => {
  // Функции для работы с куки
  const setCookie = (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  // Для хранения видимости баннера
  const [isVisible, setIsVisible] = useState(false);
  const [gaLoaded, setGaLoaded] = useState(false);

  // Используем useCallback для loadGoogleAnalytics
  const loadGoogleAnalytics = useCallback(() => {
    if (!gaLoaded) {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-1P81G0D66K";
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;

      gtag("js", new Date());
      gtag("config", "G-1P81G0D66K");
      setGaLoaded(true);
    }
  }, [gaLoaded]);

  // Обработка согласия
  const acceptCookies = () => {
    setCookie("cookieConsent", "true", 365);
    setIsVisible(false);
    loadGoogleAnalytics();
  };

  // Обработка отказа
  const declineCookies = () => {
    setCookie("cookieConsent", "false");
    setIsVisible(false);
  };

  // Проверка куки при монтировании
  useEffect(() => {
    const consentCookie = getCookie("cookieConsent");
    if (consentCookie === "true") {
      loadGoogleAnalytics();
    } else if (consentCookie === "false") {
      // Пользователь отказал, ничего не делаем
    } else {
      // Нет куки — показываем баннер
      setIsVisible(true);
    }
  }, [loadGoogleAnalytics]);

  if (!isVisible) return null;

  return (
    <div id="cookieConsent">
      <div className="cookie-title">
        <img src={CookieIcon} alt="мы используем cookie" />
      </div>
      <div className="cookie-buttons">
        <button id="acceptBtn" onClick={acceptCookies}>
          <img src={AcceptIcon} alt="принять" />
        </button>
        <button id="declineBtn" onClick={declineCookies}>
          <img src={RejectIcon} alt="отклонить" />
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
