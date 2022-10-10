import "./App.css";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
