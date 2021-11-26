import Footer from "./Footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout
