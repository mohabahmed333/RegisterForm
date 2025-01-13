import { ApiHandler } from "@/utls/apiHandler";

export const checkAuthorization = async (): Promise<boolean> => {
  try {
    await ApiHandler({
      endPoint: "test-auth",
      method: "GET",
      token: true,
    });
    return true;
  } catch (error) {
    console.error("Authorization check failed:", (error as Error).message);
    return false;
  }
};
