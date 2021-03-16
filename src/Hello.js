import React from 'react';
import IsEqual from 'react-fast-compare';

function Hello({color, name, isSpecial}) {

    return (
        <div className="hello wrapper">
            <div className="hello container">
                <h2 id="hello text" style={{color:color}}>
                    {isSpecial ? <b>*</b> : null}
                    안녕하세요~ {name}
                </h2>
            </div>
        </div>
    );
}

Hello.defaultProps = {
    name:'이름없음',
    color:'pink'
}

export default React.memo(Hello,IsEqual);
