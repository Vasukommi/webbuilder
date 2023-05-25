import Sidebar from "../../components/sidebar/Sidebar";
import Canvas from "../../components/canvas/Canvas";
import Header from "../../components/header/Header";
import "./CanvasPage.scss";

const CanvasPage = () => {
    return (
        <div className="canvas-page-section">
            <Header />
            <div className="canvas-section">
                <Sidebar />
                <Canvas />
            </div>
        </div>
    )
}

export default CanvasPage