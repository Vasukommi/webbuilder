import { useDrop } from "react-dnd";
import GridSelectionSection from "./GridSelectionSection/GridSelectionSection";
import { gridColumns } from "../../Constants/Constants";
import "./Grid.scss";

const Grid = () => {
    const [{ isOver }, column1] = useDrop(() => ({
        accept: 'Heading',
        drop: ((item: any) => {
            console.log("dropped")
        }),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }));
    return (
        <div ref={column1}>
            <GridSelectionSection />
        </div>

    )
}

export default Grid