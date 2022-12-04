import { UnstyledButton } from "@/components/ui/form";
import { useTheme } from "@/hooks/useTheme";
import { clsxm } from "@/util/clsxm";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export const Header = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <header className="fixed top-0 inset-x-0 h-16">
      <div className="flex items-center justify-between h-full px-3 border-b dark:border-b-gray-700 dark:bg-theme-900">
        <div className="inline-flex items-center">
          <p className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            Zippy Template
          </p>
        </div>

        <div className="inline-flex items-center">
          <UnstyledButton
            onClick={toggleTheme}
            className={clsxm(
              "w-10 h-10 rounded justify-center",
              "hover:bg-theme-100 dark:hover:bg-theme-700"
            )}
          >
            {theme === "dark" ? (
              <HiOutlineMoon className="w-5 h-5" />
            ) : (
              <HiOutlineSun className="w-5 h-5" />
            )}
          </UnstyledButton>
        </div>
      </div>
    </header>
  );
};
