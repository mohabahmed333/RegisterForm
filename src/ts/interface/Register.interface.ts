import { clientType } from "../enum/ClientType.enum";

export interface IregisterForm {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  client_type: clientType;
  company_name?: string | undefined;
  issuing_authority?: string | undefined;
  commercial_license_number?: string | undefined;
}
