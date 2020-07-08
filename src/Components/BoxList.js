import React, {useState} from 'react';
import Box from '../Components/Box';



const BoxList = () => {
        // const [width, setWidth] = useState(10);
        // const [height, setHeight] = useState(40);
        // const [color, setColor] = useState("orange");
        
        let state = {
            boxes: {
                width: 10,
                height: 40,
                color: "orange",
            }
        }

        // const boxes = state.boxes.map(
        //      =(props) => {
        //         <Box />
        //     }
        // );

    return (
        <div>
            
           <h1>Color Box Maker Thingy</h1> 
           {/* {boxes} */}
        </div>
    )
}

export default BoxList;