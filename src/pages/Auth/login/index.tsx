import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form } from "../../../components/ui/form";
import { Button } from "../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { TextField } from "../../../components/custom/TextField";
import { LoginFormSchema } from "./schema";
import { RegisterDefaultValue } from "../../../constants/register.constant";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import HandleLoginApi from "@/apis/HandleLogin.apis";
import { SignInF } from "@/store/useAuthStore ";
import { useNavigate } from "react-router-dom";
import { LoginDefaultValue } from "@/constants/login.constant";
import { useHandleError } from "@/hooks/ysehandleErrorHook";
const LoginPage = () => {
  const SignIn = SignInF();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const formSchema = LoginFormSchema();
  const { t } = useTranslation();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: RegisterDefaultValue,
  });
  const navigate = useNavigate();
  const handleError = useHandleError();
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const { data } = await HandleLoginApi(values);
      localStorage.setItem("token", data?.token);
      SignIn(data);
      navigate("/dashboard");
      toast({
        title: t("success"),
        description: data.message,
        className: "bg-green-600 text-white",
      });
      form.reset(LoginDefaultValue);
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
          {t("login.title")}
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <TextField
              form={form}
              name="email"
              label={t("login.email")}
              type="email"
            />
            <TextField
              form={form}
              name="password"
              label={t("login.password")}
              type="password"
            />
            <div className="flex items-center gap-2">
              <p className="text-bold  lowercase">
                {t("login.doNotHaveAccount")}
              </p>
              <p
                className="text-black underline cursor-pointer"
                onClick={() => navigate("/")}
              >
                {t("login.register")}
              </p>
            </div>
            <Button type="submit" className="w-full">
              {loading ? "loading" : t("login.submit")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default LoginPage;
