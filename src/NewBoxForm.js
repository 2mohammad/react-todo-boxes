import React from "react";


const NewBoxForm = ({boxState, removeButton, saveRender, saveRenderFunc}) => {
    const handleRemoval = (e) =>{
        e.preventDefault()
        const adjustedRenders = saveRender.filter(render => render.id !== e.target.id)
        saveRenderFunc([...adjustedRenders])
    }

    return (
        <div id={boxState.id}
        style={{
            height:`${boxState.width}px`,
            width:`${boxState.height}px`,
            backgroundColor:`${boxState.backgroundColor}`
        }}
        >
            {removeButton === true ? <button id={boxState.id} onClick={handleRemoval}>Remove</button> : ''}
        </div>

    )
}

export default NewBoxForm;