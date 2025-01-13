import { ReactNode, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const LanguageDirection = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return <>{children}</>;
};
