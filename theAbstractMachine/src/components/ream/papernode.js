import React from "react"
import styled, { keyframes } from "styled-components"
import Xarrow, { useXarrow, Xwrapper } from 'react-xarrows';
import Draggable, {DraggableCore}  from 'react-draggable';

const PaperNode = (props) => {
  const updateXarrow = useXarrow();
  return (
    <Draggable onDrag={updateXarrow} onStop={updateXarrow} >
    <div ref={props.snippet.ref} id={props.snippet.id} style={{width:"fit-content"}}>
      <PaperWrap>
          <CodeVisible
            dangerouslySetInnerHTML={{ __html: props.snippet.code }}
          ></CodeVisible>
      </PaperWrap>
    </div>
    </Draggable >
  )
}

const CodeVisible = styled.code`
  color: black;
  font-size: 14px;
  max-width: 100%;
  white-space: pre-wrap;
  b{
      background-color: #928464b8;
      border-radius: 2px;
      padding: 2px;
  }
`

/*
https://www.youtube.com/watch?v=rhvpZDws4UA
*/
// rgb(49 30 9 / 94%) 0px -2px 6px 0px inset;

const PaperWrap = styled.pre`
  padding: 15px;
  max-width: 200px;
  position: relative;
  background: linear-gradient(-135deg, transparent 1.5em, #acacac 0);
  background-repeat: no-repeat;
  border-radius: 2px;
  box-shadow: rgb(7 7 7 / 68%) 0px 30px 20px -20px, rgb(0 0 0) 0px 30px 60px -30px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    width: 2em;
    height: 2em;
    background: #acacac;
    background: linear-gradient(-135deg, transparent 1.5em, #acacac 0);
    box-shadow: -4px 3px 3px rgb(49 30 9 / 24%);
    border-bottom-left-radius: 2px;
  }
`

export default PaperNode
