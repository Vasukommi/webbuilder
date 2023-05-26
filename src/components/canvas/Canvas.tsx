import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import ColumnSelector from "../editors/column-selector/ColumnSelector";
import { addElement, setActiveElementId } from "../../app/slices/canvasSlice";
import Heading from "../elements/Heading";
import "./Canvas.scss";

const Canvas = () => {
    const dispatch = useDispatch();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'html',
        drop: ((item: any) => {
            debugger
            const updatedItem = { ...item, elementId: uuidv4() }
            dispatch(addElement(updatedItem));
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));

    const setActiveElement = (eachComponent: any) => {
        dispatch(setActiveElementId(eachComponent))
    }

    const renderElementsArray = useSelector((state: any) => state.canvasSlice.canvasElements);

    return (
        <div className="canvas-component" ref={drop}>
            {renderElementsArray?.length > 0 && renderElementsArray.map((eachComponent: any, index: number) => {
                const Component = eachComponent.component;
                return <Component key={index} onClickActive={setActiveElement} eachComponent={eachComponent} />;
            })}
        </div>
    );
};

export default Canvas;