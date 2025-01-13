import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { TextField } from "../../../components/custom/TextField";
import RegisterFormSchema from "./schema";
import { SelectField } from "../../../components/custom/selectFileds";
import { B2BFields } from "./registerComponents/B2BFields";
import { RegisterDefaultValue } from "../../../constants/register.constant";
import handleRegisterApi from "../../../apis/HandleRegister.api";
import { clientType } from "../../../ts/enum/ClientType.enum";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { SignInF } from "@/store/useAuthStore ";
import { useHandleError } from "@/hooks/ysehandleErrorHook";
const RegisterPage = () => {
  const { toast } = useToast();
  const formSchema = RegisterFormSchema();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: RegisterDefaultValue,
  });
  const clientTypeForm = form.watch("client_type");
  const [loading, setLoading] = useState(false);
  const handleError = useHandleError();
  const SignIn = SignInF();
  useEffect(() => {
    if (clientTypeForm !== clientType.B2B) {
      form.resetField("commercial_license_number");
      form.resetField("issuing_authority");
      form.resetField("company_name");
    }
  }, [clientTypeForm]);
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { data } = await handleRegisterApi(values);
      SignIn(data);
      toast({
        title: t("success"),
        description: data.message,
      });
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
      form.reset(RegisterDefaultValue);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="container mx-auto px-4 py-8 text-black ">
      <div className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {t("register.title")}
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <TextField form={form} name="name" label={t("register.name")} />
            <TextField
              form={form}
              name="email"
              label={t("register.email")}
              type="email"
            />
            <TextField
              form={form}
              name="password"
              label={t("register.password")}
              type="password"
            />
            <TextField
              form={form}
              name="password_confirmation"
              label={t("register.password_confirmation")}
              type="password"
            />
            <div className="flex gap-2 w-full">
              <SelectField
                form={form}
                name="mobile_country_code"
                label={t("register.country_code")}
                options={[{ label: "+20", value: "+20" }]}
              />
              <TextField
                form={form}
                name="mobile"
                label={t("register.mobile")}
                placeholder="111333.."
              />
            </div>
            <SelectField
              form={form}
              name="client_type"
              label={t("register.client_type")}
              options={[
                { label: "MY_COMPANY", value: clientType.MY_COMPANY },
                { label: "B2C", value: clientType.B2C },
                { label: "B2B", value: clientType.B2B },
              ]}
            />

            {clientTypeForm === clientType.B2B && <B2BFields form={form} />}
            <div className="flex items-center gap-2">
              <p className="text-bold  lowercase">
                {t("register.registerHaveEmail")}
              </p>
              <p
                className="text-black underline cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {t("register.login")}
              </p>
            </div>
            <Button type="submit" className="w-full">
              {loading ? "loading" : t("register.submit")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default RegisterPage;
