// schema.ts
import * as z from "zod";
import { clientType } from "../../../ts/enum/ClientType.enum";
import { useTranslation } from "react-i18next";

const RegisterFormSchema = () => {
  const { t } = useTranslation();

  return z
    .object({
      name: z
        .string({ message: t("register.errors.required") })
        .max(255, { message: "error max length is 255 charachters" })
        .min(6, { message: t("register.errors.required") }),
      email: z
        .string({ message: t("register.errors.required") })
        .email({ message: t("register.errors.validEmail") })
        .min(1, { message: t("register.errors.required") }),
      password: z
        .string({ message: t("register.errors.required") })
        .min(1, {
          message: t("register.errors.required"),
        })
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
          {
            message: t("register.errors.password"),
          },
        ),
      password_confirmation: z
        .string({ message: t("register.errors.required") })
        .min(1, { message: t("register.errors.required") }),
      mobile: z.string().regex(/^\d{10}$/, {
        message: t("register.errors.mobileNumber"),
      }),

      mobile_country_code: z.string().optional(),
      client_type: z.nativeEnum(clientType),
      company_name: z.string().optional(),
      issuing_authority: z.string().optional(),
      commercial_license_number: z.string().optional(),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: t("register.errors.password_confirmation"),
      path: ["password_confirmation"],
    })
    .superRefine((data, ctx) => {
      if (data.client_type !== clientType.B2B) {
        return;
      }

      if (!data.company_name) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("register.errors.company_name"),
          path: ["company_name"],
        });
      }

      if (!data.issuing_authority) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("register.errors.issuing_authority"),
          path: ["issuing_authority"],
        });
      }

      if (!data.commercial_license_number) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t("register.errors.commercial_license_number"),
          path: ["commercial_license_number"],
        });
      }
    });
};
export default RegisterFormSchema;
