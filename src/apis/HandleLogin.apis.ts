import { ILoginForm } from "@/ts/interface/loginForm.interface";
import { ApiHandler } from "../utls/apiHandler";

const HandleLoginApi = (values: ILoginForm) => {
  return ApiHandler({
    data: values,
    endPoint: "auth/login",
    method: "POST",
  });
};

export default HandleLoginApi;
