import SidebarElements from "./sidebar-elements/SidebarElements";
import "./Sidebar.scss";

const sidebarElementsArray = [
    {
        id: 1,
        label: "Heading",
        icon: "RxHeading"
    },
    {
        id: 2,
        label: "Paragraph",
        icon: "RxHeading"
    },
    {
        id: 3,
        label: "Image",
        icon: "RxHeading"
    },
    {
        id: 4,
        label: "Button",
        icon: "RxHeading"

    },
    {
        id: 5,
        label: "Video",
        icon: "RxHeading"
    }
]

const Sidebar = () => {
    return (
        <div className="sidebar-component">
            {sidebarElementsArray.map((eachElement) => (
                <SidebarElements eachElement={eachElement} key={eachElement.id}/>
            ))}
        </div>
    )
}

export default Sidebar