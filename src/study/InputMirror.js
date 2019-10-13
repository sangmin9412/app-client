import React from 'react';

const InputMirror = () => {
    const text = 'abcd';
    const onChangeHandler = (e) => {
        console.log(e.currentTarget.value);
    };
    return (
        <div>
            <input type={'text'}
                   onChange={onChangeHandler}
                   value={text} />
            <div>{text}</div>
        </div>
    );
};

export default InputMirror;