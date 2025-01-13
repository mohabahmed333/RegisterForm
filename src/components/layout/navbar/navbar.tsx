import { useMemo } from "react";
import { Disclosure } from "@headlessui/react";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import ProfileMenu from "./components/ProfileMenu";
import MobileMenu from "./components/MobileMenu";
import { UserData } from "@/store/useAuthStore ";
import { mainLayoutRoutes } from "@/confegrations/routesConfig";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = UserData();
  const routes = useNavigate();
  const navigation = useMemo(() => {
    return mainLayoutRoutes.map((route) => ({
      name:
        route.path.replace("/", "").charAt(0).toUpperCase() +
        route.path.slice(2),
      href: route.path,
      current: location.pathname === route.path,
    }));
  }, [routes]);
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenu />
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Logo />
            {user && <Navigation navigation={navigation} />}
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LanguageSwitcher />
            {user && <ProfileMenu user={user} />}
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
export default Navbar;
