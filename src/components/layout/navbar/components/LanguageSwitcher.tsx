import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="mr-4 rounded-full bg-gray-800 px-3 py-2 text-sm text-white hover:bg-gray-700"
    >
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
};
export default LanguageSwitcher;
