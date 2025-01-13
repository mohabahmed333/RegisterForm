// hooks/useAuthorization.ts
import { checkAuthorization } from "@/apis/auth";
import { SignUserOut } from "@/utls/signedUserOut";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useAuthorization = (): void => {
  const navigate = useNavigate();
  useEffect(() => {
    const authorizeUser = async () => {
      const isAuthorized = await checkAuthorization();
      if (!isAuthorized) {
        SignUserOut();
      }
    };

    authorizeUser();
  }, []);
};
