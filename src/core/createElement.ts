import { useSelector } from 'react-redux';

const CreateElement = async (item : any) => {
    const canvasElements = useSelector((state: any) => state.canvasSlice.canvasElements)
    console.log("test")
}

export default CreateElement