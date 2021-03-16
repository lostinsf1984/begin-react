import React, {useCallback, useRef, useState} from 'react';
import IsEqual from 'react-fast-compare';

function InputSample() {
    const [inputs, setInputs] = useState({textName:'', nickName:''});

    const {textName, nickName} = inputs;

    const nameInput = useRef();

    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    },[inputs])

    const onReset = useCallback(() => {
        setInputs({textName:'',nickName:''});
        nameInput.current.focus();
    },[])


    return (
        <div>
            <input onChange={onChange} name="textName" value={textName} placeholder="이름" ref={nameInput}/>
            <input onChange={onChange} name="nickName" value={nickName} placeholder="닉네임"/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {textName} ({nickName})
            </div>
        </div>
    );
}

export default React.memo(InputSample,IsEqual)