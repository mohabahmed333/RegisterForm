// utils/auth.ts

import useAuthStore from "@/store/useAuthStore ";

export const SignUserOut = (): void => {
  const clearUserData = useAuthStore.getState().signOut;
  localStorage.removeItem("token");
  clearUserData();
};
