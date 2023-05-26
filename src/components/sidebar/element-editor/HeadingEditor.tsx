import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdEdit } from 'react-icons/md';
import { FaPaintBrush } from 'react-icons/fa';
import { MdKeyboardBackspace } from 'react-icons/md'
import { setActiveElement } from '../../../app/slices/sidebar';
import { updateHeadingText } from '../../../app/slices/elementContent';

import "./HeadingEditor.scss";

const HeadingEditor = () => {
    const dispatch = useDispatch();
    const defaultText = useSelector((state: any) => state.elementContentSlice.headingText)
    const [isContentTab, setContentTab] = useState(true);
    const [inputText, setInputText] = useState(defaultText)
    const toggleTab = () => {
        setContentTab(!isContentTab)
    }
    const navigateToSidebar = () => {
        dispatch(setActiveElement(""))
    }

    const updateText = (event: any) => {
        dispatch(updateHeadingText(event.target.value))
        setInputText(event.target.value)
    }

    return (
        <div className='heading-editor-section'>
            <div className='exit-heading-editor-icon' onClick={navigateToSidebar}>
                <MdKeyboardBackspace size={30} />
            </div>
            <div className='heading-editor-menu' onClick={toggleTab}>
                <MdEdit style={{ cursor: 'pointer' }} className={`content-tab ${isContentTab && 'activeContentTab'}`} />
                <FaPaintBrush style={{ cursor: 'pointer' }} className={`content-tab ${!isContentTab && 'activeContentTab'}`} />
            </div>
            {isContentTab &&
                <div className=''>
                </div>}
            {!isContentTab && <div className=''>
                {/*HEADING STYLES*/}
            </div>}

            <div>
                <p>Heading Text</p>
                <div>
                    <input type='text' className='heading-editor-text-input' onChange={updateText} value={inputText} />
                </div>
            </div>
        </div>
    )
}

export default HeadingEditor