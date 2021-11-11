import React, {Children, useRef} from 'react'
import styled, { keyframes } from "styled-components";
import Draggable, {DraggableCore}  from 'react-draggable';
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import PaperNode from './papernode'

const ReamCanvas = ({arrows, children}) => {


    const updateXarrow = useXarrow();
    //onDrag={updateXarrow} onStop={updateXarrow}

    /*
    let snippet1 = {code:`
for num in numbers:!
    <b id='calc'>calc(num)</b>`,
    id: 'calc',
    ref: useRef(null)};

    let snippet2 = {
        code:`
<b id='fun'>def calc(num):</b>
    return num+1`,
    id: 'fun',
    ref: useRef(null)}; */

    const line = {
        strokeWidth: 2,
        color: '#505050',
        dashness: true
    }

    return (
        <Canvas id="canvas">
        <Xwrapper>
            {children}

             {arrows.map((ar,i)=>{
                 return (
                    <Xarrow key={`${ar.from}_${ar.to}`} start={ar.from} end={ar.to} {...line} />
                 )
             })}
            
        </Xwrapper>
        </Canvas>

    )
}

const Canvas = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export default ReamCanvas
