import { IregisterForm } from "./Register.interface";

export interface ILoginForm extends Pick<IregisterForm, "email" | "password"> {}
