import { RxHeading } from 'react-icons/rx';
import "./SidebarElements.scss"

const SidebarElements = ({ eachElement }: any) => {

    return (
        <div>
            {eachElement.label}
        </div>
    )
}

export default SidebarElements