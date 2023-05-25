import { useDrag } from "react-dnd";
import "./SidebarElements.scss"

const SidebarElements = ({ eachElement }: any) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'html',
        item: eachElement,
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    return (
        <div className="sidebar-icon-container" ref={drag} id={eachElement.elementId}>
            {eachElement.icon}
            {eachElement.label}
        </div>
    )
}

export default SidebarElements