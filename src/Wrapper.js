import React from 'react';
import IsEqual from "react-fast-compare";

function Wrapper({children}){

    const style = {
        border: "10px solid black",
        padding: "10px"
    }

    return (
        <div style={style}>
            {children}
        </div>
    );
}

export default React.memo(Wrapper,IsEqual);