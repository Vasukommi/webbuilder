import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import ColumnSelector from "../editors/column-selector/ColumnSelector";
import { addElement } from "../../app/slices/canvasSlice";
import Heading from "../elements/Heading";
import "./Canvas.scss";

const Canvas = () => {
    const dispatch = useDispatch();
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'html',
        drop: ((item) => {
            dispatch(addElement(item));
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));

    const renderElementsArray = useSelector((state: any) => state.canvasSlice.canvasElements);

    return (
        <div className="canvas-component" ref={drop}>
            {renderElementsArray?.length > 0 && renderElementsArray.map((eachComponent: any, index: number) => {
                const Component = eachComponent.component;
                return <Component key={index} />;
            })}
        </div>
    );
};

export default Canvas;
