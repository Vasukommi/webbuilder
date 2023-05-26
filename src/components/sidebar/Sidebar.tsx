import { RxHeading } from 'react-icons/rx';
import { BiText } from 'react-icons/bi';
import { BsImage } from 'react-icons/bs';
import { HiCursorClick } from 'react-icons/hi';
import { RiVideoFill } from 'react-icons/ri';
import { FaRegImage } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import SidebarElements from "./sidebar-elements/SidebarElements";
import Button from '../elements/Button';
// import Container from '../elements/Container';
import Heading from '../elements/Heading';
import Text from '../elements/Text';
import Image from '../elements/Image';
import Banner from '../elements/Banner';
import HeadingEditor from './element-editor/HeadingEditor';

import "./Sidebar.scss";

const sidebarElementsArray = [
    {
        elementId: 1,
        tag: 'h1',
        label: 'Heading',
        component: Heading,
        content: "",
        icon: <RxHeading />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    },
    {
        elementId: 2,
        tag: 'p',
        label: 'Text',
        component: Text,
        content: "",
        icon: <BiText />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    },
    {
        elementId: 3,
        tag: 'img',
        label: 'Image',
        content: "",
        component: Image,
        icon: <BsImage />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    },
    {
        elementId: 4,
        tag: 'button',
        label: 'Button',
        component: Button,
        content: "",
        icon: <HiCursorClick />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    },
    {
        elementId: 5,
        label: 'Video',
        tag: 'video',
        content: "",
        icon: <RiVideoFill />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    },
    {
        elementId: 6,
        label: 'Banner',
        tag: 'img',
        content: "",
        component: Banner,
        icon: <FaRegImage />,
        attribute: {
            id: "",
            href: ""
        },
        events: {
            click: '',
            focus: ''
        },
        style: {
            width: "100px"
        }
    }
]

const Sidebar = () => {
    const [activeSidebar, setActiveSidebar] = useState("");
    const activeSidebarValue = useSelector((state: any) => state.sidebar.activeElementEditor);

    useEffect(() => {
        setActiveSidebar(activeSidebarValue)
    },[activeSidebarValue]);

    return (
        <div className="sidebar-component">
            {activeSidebar === "HEADING" ? <HeadingEditor /> :
                <div className='sidebar-element-container'>
                    {sidebarElementsArray.map((eachElement) => (
                        <SidebarElements eachElement={eachElement} key={eachElement.elementId} />
                    ))}
                </div>
            }
        </div>
    )
}

export default Sidebar