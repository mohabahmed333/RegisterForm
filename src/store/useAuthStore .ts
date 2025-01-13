import { User } from "@/ts/interface/User.interface";
import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface AuthState {
  user: User | null;
  isSignedIn: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
}

type AuthPersist = PersistOptions<AuthState>;

const useAuthStore = create<AuthState>()(
  persist<AuthState>(
    (set) => ({
      user: null,
      isSignedIn: false,
      signIn: (user) =>
        set({
          user,
          isSignedIn: true,
        }),
      signOut: () =>
        set({
          user: null,
          isSignedIn: false,
        }),
    }),
    {
      name: "auth-storage", // Key for localStorage
      getStorage: () => localStorage, // Use localStorage
    } as AuthPersist,
  ),
);

export const SignInF = () => useAuthStore((store) => store.signIn);
export const signedUserOutF = () => useAuthStore((store) => store.signOut);
export const isUserSignedIn = () => useAuthStore((store) => store.isSignedIn);
export const UserData = () => useAuthStore((store) => store.user);

export default useAuthStore;
