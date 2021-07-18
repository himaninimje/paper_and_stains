import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
    return (
        <div className="bg-red-50">
            <Header />
            {props.children}
            <Footer />
        </div>
    );
}

export default Layout;