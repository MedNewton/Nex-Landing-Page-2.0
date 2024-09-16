import DotsIcon from "@/assets/icons/dots";
import ThemeSwitch from "./ThemeSwitch";
import { useTheme } from "next-themes";

const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === "system" ? systemTheme : theme;

    return (
        <nav className="w-full h-fit flex flex-row items-center justify-between px-8 pt-4">
            <h5 className="font-medium text-2xl">Nex Labs</h5>
            <div className="w-fit h-fit flex flex-row items-center justify-end gap-1">
                <ThemeSwitch />
                <button className="bg-nexGreen-500 flex flex-row items-center justify-center py-2 px-8 rounded-full gap-2">
                    <h5 className="font-medium">Menu</h5>
                    <DotsIcon width={16} height={7} mode={currentTheme} />
                </button>
            </div>
        </nav>
    )
}
export default Navbar;