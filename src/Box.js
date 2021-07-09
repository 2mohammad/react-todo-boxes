import React from "react";


const Box = ({updateBoxState, boxState, saveRenderFunc, saveRender}) => {
 
    const handleChange = (e) => {
        const {name, value} = e.target;
        updateBoxState({...boxState, [name]: value}) // returned state object
        //console.log(a)
        }

    const saveSquare =(e) => {
        e.preventDefault()
        saveRenderFunc([...saveRender, {...boxState}])
        //console.log(a())
    }
    return (
        <form>
            <label htmlFor="height">Height: {boxState.height}</label>
            <input
                id="height"
                name="height"
                type="range"
                min="100"
                max="1000"
                onChange={handleChange}
            >
            </input>
            <label htmlFor="width">Width: {boxState.width}</label>
            <input
                id="width"
                name="width"
                type="range"
                min="100"
                max="1000"
                onChange={handleChange}
            >
            </input>
            <label htmlFor="backgroundColor">Color Code: {boxState.backgroundColor}</label>
            <input 
                id="backgroundColor"
                name="backgroundColor"
                type="color"
                onChange={handleChange}
            >
            </input>
            <button
                onClick={saveSquare}
            >Save</button>
        </form>
    )
}

export default Box;