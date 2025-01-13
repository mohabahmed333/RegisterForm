// schema.ts
import { useTranslation } from "react-i18next";
import * as z from "zod";

export const LoginFormSchema = (lang?: string) => {
  const { t } = useTranslation();

  return z.object({
    email: z
      .string({ message: t("login.errors.required") })
      .email({ message: t("login.errors.email") })
      .min(1, { message: t("login.errors.required") }),
    password: z.string({ message: t("login.errors.required") }).min(1, {
      message: t("login.errors.required"),
    }),
  });
};
