import ContentApp from "./ContentApp";
import Header from "./Header";
import SiderApp from "./SiderApp";

export default function AppLayout() {
    return (
        <>
            <div className="app-layout">
                <Header />
                <SiderApp />
                <ContentApp />
            </div>
        </>
    )
}