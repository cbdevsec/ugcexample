import { useNavigate, useLocation } from "react-router-dom";

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

  return (
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
  );
}

export default LanguageSwitcher;