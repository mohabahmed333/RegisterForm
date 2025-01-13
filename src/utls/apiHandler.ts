import axios, { AxiosRequestConfig, Method } from "axios";
import { BaseUrl } from "../constants/BaseUrl";
import { IapiHandlerParams } from "@/ts/interface/ApiHandlerParams.inerface";

export const ApiHandler = <T extends object>({
  data,
  endPoint,
  method = "POST",
  token = false,
}: IapiHandlerParams<T>): Promise<any> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }

  // Prepare Axios config
  const axiosConfig: AxiosRequestConfig = {
    method: method as Method,
    baseURL: BaseUrl,
    url: endPoint,
    headers,
  };

  if (data && !["GET", "HEAD"].includes(method)) {
    axiosConfig.data = data;
  }

  return axios(axiosConfig)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
