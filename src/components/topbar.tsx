import { UserButton } from "@clerk/nextjs";
import { AdBanner } from "./ad-banner";

export default function TopBar() {
    return (
        <header className="flex items-center justify-between px-4 py-3 bg-gray-50 h-32 ">
            <div></div>
            <AdBanner></AdBanner>
            <UserButton afterSignOutUrl="/" ></UserButton>
        </header>

    );
}
