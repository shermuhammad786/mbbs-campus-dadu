import React from 'react'

function DisplayLecture({ pdf }: any) {
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <object data={pdf} type="application/pdf"></object>
            <h1>this is padf</h1>
        </div>
    )
}

export default DisplayLecture