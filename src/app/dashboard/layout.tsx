import { Footer } from '@/components/footer';
import SideBar from '@/components/sidebar';
import TopBar from '@/components/topbar';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex flex-grow w-full lg:grid lg:grid-cols-[300px_1fr]">
                <SideBar />
                <div className="flex flex-col flex-grow">
                    <TopBar />
                    <div className="flex-grow p-6">{children}</div>
                </div>
            </div>
            <Footer />
        </div>

    );
}
