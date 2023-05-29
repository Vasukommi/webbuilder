import { sidebarElements } from "../../Constants/Constants"
import SidebarDraggableElements from "./SidebarDraggableElements/SidebarDraggableElements";
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className='sidebar-section'>
            {sidebarElements.map((element) => <SidebarDraggableElements element={element} />)}
        </div>
    )
}

export default Sidebar