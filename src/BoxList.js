import React, { useState } from "react";
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from "uuid";


const BoxList = () => {
    const INITIAL_STATE = [{
        height: 100,
        width: 100,
        backgroundColor:"black",
        id: uuid()

    }]
    const [boxState, setBoxState] = useState(INITIAL_STATE)
    const [saveRender, setRenders] = useState([])

    const updateBoxState = (state) => {
        setBoxState(boxState => [...boxState, {...state, id: uuid()}])
        return state
    }
    //console.log(boxState)

    const saveRenderFunc = (state) => {
        setRenders(saveRender => [...state])
        console.log(state)   
        setBoxState(INITIAL_STATE)
    }


   return (
       <div>
       <Box saveRender = {saveRender} saveRenderFunc={saveRenderFunc} updateBoxState={updateBoxState} boxState={boxState.slice(-1)[0]} />
       <NewBoxForm removeButton={false} saveRender={saveRender} saveRenderFunc={saveRenderFunc} boxState={boxState.slice(-1)[0]} />
       {saveRender.map(render => <NewBoxForm saveRender={saveRender} saveRenderFunc={saveRenderFunc} key={render.id} removeButton={true} boxState={render} ></NewBoxForm>)}
       </div>
   )
}

export default BoxList;