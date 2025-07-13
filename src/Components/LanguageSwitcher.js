import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();

  const switchLanguage = () => {
    if (location.pathname === "/fr") {
      navigate("/");
    } else {
      navigate("/fr");
    }
  };

  function useIsMobile(breakpoint = 640) {
    const [isMobile, setIsMobile] = useState(
      typeof window !== "undefined" ? window.innerWidth <= breakpoint : false
    );

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= breakpoint);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [breakpoint]);

    return isMobile;
  }

  const isMobile = useIsMobile();

  return (
    <>
    {isMobile ? (
      <button
      onClick={switchLanguage}
      style={{
        position: "absolute",
        top: "1rem",
        right: "2rem",
        padding: "0.5rem 1rem",
        background: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {location.pathname === "/fr" ? "En" : "Fr"}
    </button>
    ) : (
      <button
      onClick={switchLanguage}
      style={{
        position: "fixed",
        top: "2rem",
        right: "3rem",
        padding: "0.5rem 1rem",
        background: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {location.pathname === "/fr" ? "🇬🇧 English" : "🇫🇷 Français"}
    </button>
    )}
    </>
  );
}

export default LanguageSwitcher;