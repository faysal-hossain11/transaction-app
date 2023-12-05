import Footer from "../Footer/Footer";
import Header from "../header/Header";

const Layout = ({ children }) => {
    return (
        <div >
            <Header />
            <div className=" w-[900px] bg-slate-200 my-[100px] m-auto p-10 rounded-md" >
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;