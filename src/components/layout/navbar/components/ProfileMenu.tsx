import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { SignUserOut } from "@/utls/signedUserOut";

const ProfileMenu = ({ user }: { user: { name: string; image: string } }) => {
  const navigate = useNavigate();

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          <img
            alt={user.name}
            src={user.image}
            className="h-8 w-8 rounded-full"
          />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {user.name ? `Welcome, ${user.name}` : "Your Profile"}
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
        </MenuItem>
        <MenuItem>
          <p
            onClick={() => {
              SignUserOut();
              navigate("/");
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </p>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default ProfileMenu;
