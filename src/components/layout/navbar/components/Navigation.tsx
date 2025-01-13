import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navigation = ({
  navigation,
}: {
  navigation: { name: string; href: string; current: boolean }[];
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <p
            key={item.name}
            onClick={() => navigate(item.href)}
            aria-current={item.current ? "page" : undefined}
            className={classNames(
              item.current
                ? "bg-gray-900 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white",
              "rounded-md px-3 py-2 text-sm font-medium cursor-pointer",
            )}
          >
            {t(item.name)}
          </p>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
