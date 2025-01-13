import { clientType } from "../ts/enum/ClientType.enum";
import { IregisterForm } from "../ts/interface/Register.interface";

export const RegisterDefaultValue = <IregisterForm>{
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  mobile: "",
  mobile_country_code: "+20",
  client_type: clientType.B2C,
  company_name: "",
  issuing_authority: "",
  commercial_license_number: "",
};
