import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

export function LayoutWithAds() {
    return (
        <div className="ads-layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <aside>
                ADS
            </aside>
            <Footer />
        </div>
    );
}