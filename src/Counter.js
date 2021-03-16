import React, {useState} from 'react';
import IsEqual from 'react-fast-compare';

function Counter(){
    const [calnum, setCalnum] = useState(0);

    const onIncrease = () => {
        setCalnum(calnum + 1);
    };
    const onDecrease = () => {
        setCalnum(calnum - 1);
    };

    return(
        <div>
            <h1>{calnum}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default React.memo(Counter,IsEqual);