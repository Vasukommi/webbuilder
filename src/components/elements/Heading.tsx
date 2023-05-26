import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react'
import { setActiveElement } from "../../app/slices/sidebar"

const Heading = ({ onClickActive, eachComponent }: any) => {
    const dispatch = useDispatch()
    const headingText = useSelector((state: any) => state.elementContentSlice.headingText)
    const [defaultText, setHeadingText] = useState("Default Headline");
    const onClickHeading = () => {
        dispatch(setActiveElement('HEADING'));
        onClickActive(eachComponent)
    }
    useEffect(() => {
        setHeadingText(headingText)
    }, [headingText]);

    return (
        <div onClick={onClickHeading}>
            <h3>{defaultText}</h3>
        </div>
    )
}

export default Heading