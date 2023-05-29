import Sidebar from "../components/Sidebar/Sidebar"
import Builder from "../components/Builder/Builder"
import Header from "../components/Header/Header"

import "./PageBuilder.scss"

const PageBuilder = () => {
    return (
        <div className="page-builder-page">
            <div className="page-builder-heading-section">
                <Header />
            </div>  
            <div className="page-builder-builder-section">
                <Sidebar />
                <Builder />
            </div>
        </div>
    )
}

export default PageBuilder