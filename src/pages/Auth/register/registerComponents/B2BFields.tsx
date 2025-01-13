import { UseFormReturn } from "react-hook-form";
import { TextField } from "../../../../components/custom/TextField";
import { useTranslation } from "react-i18next";
import { clientType } from "@/ts/enum/ClientType.enum";
interface B2BFieldsInerface {
  form: UseFormReturn<
    {
      name: string;
      email: string;
      password: string;
      password_confirmation: string;
      mobile: string;
      client_type: clientType;
      company_name?: string | undefined;
      issuing_authority?: string | undefined;
      commercial_license_number?: string | undefined;
    },
    any,
    undefined
  >;
}
export const B2BFields = ({ form }: B2BFieldsInerface) => {
  const { t } = useTranslation();
  return (
    <>
      <TextField
        form={form}
        name="company_name"
        label={t("register.company_name")}
      />
      <TextField
        form={form}
        name="issuing_authority"
        label={t("register.issuing_authority")}
      />
      <TextField
        form={form}
        name="commercial_license_number"
        label={t("register.commercial_license_number")}
      />
    </>
  );
};
