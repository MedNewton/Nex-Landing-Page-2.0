import DotsIcon from "@/assets/icons/dots";
import MoonIcon from "@/assets/icons/moon";

const Navbar = () => {
    return (
        <nav className="w-full h-fit flex flex-row items-center justify-between px-8 py-6">
            <h5 className="text-nexBlack-500 font-medium text-2xl">Nex Labs</h5>
            <div className="w-fit h-fit flex flex-row items-center justify-end gap-1">
                <button className="bg-nexGreen-500 flex flex-row items-center justify-center p-2 rounded-full gap-2">
                    <MoonIcon width={24} height={24} />
                </button>
                <button className="bg-nexGreen-500 flex flex-row items-center justify-center py-2 px-8 rounded-full gap-2">
                    <h5 className="text-nexBlack-500 font-medium">Menu</h5>
                    <DotsIcon width={16} height={7}></DotsIcon>
                </button>
            </div>
        </nav>
    )
}
export default Navbar;