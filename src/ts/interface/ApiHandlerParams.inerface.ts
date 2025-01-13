import { HttpMethod } from "../types/HttpMehod.type";

export interface IapiHandlerParams<T> {
  data?: T;
  endPoint: string;
  method?: HttpMethod;
  token?: boolean;
}
