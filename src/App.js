// import Button from "./components/Button/Button";
//
// function App() {
//     return `
//     <div>
//     ${Button({
//         class: 'btn--primary',
//         text: '1111'
//     })}
//     ${Button({
//         class: 'btn--warning',
//         text: '222222'
//     })}
// </div>
//     `
// }
//
import React from 'react';
import Counter from "./study/Counter";
import InputMirror from "./study/InputMirror";
import Calculator from "./study/Calculator";

function App() {
    return (
        <div>
            <Counter />
            <hr />
            <InputMirror />
            <hr />
            <Calculator />
        </div>
    )
}
export default App;




