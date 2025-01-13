import { IregisterForm } from "../ts/interface/Register.interface";
import { ApiHandler } from "../utls/apiHandler";

const handleRegisterApi = (values: IregisterForm) => {
  return ApiHandler({
    data: values,
    endPoint: "auth/register",
    method: "POST",
  });
};

export default handleRegisterApi;
