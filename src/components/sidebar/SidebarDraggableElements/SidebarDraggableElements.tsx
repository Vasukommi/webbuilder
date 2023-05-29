import { useDrag } from "react-dnd"
import './SidebarDraggableElements.scss';

interface Element {
    element: {
        icon: React.FC,
        label: string,
        elementId: string
    }
}

const SidebarDraggableElements = ({ element }: Element) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'Heading',
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))
    const { icon: Icon, label, elementId } = element
    return (
        <div className='sidebar-draggable-elements-section' ref={drag} id={elementId}>
            <Icon />
            <p>{label}</p>
        </div>
    )
}

export default SidebarDraggableElements