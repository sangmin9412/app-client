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
import React, {useEffect, useState} from 'react';
import Counter from "./study/Counter";
import InputMirror from "./study/InputMirror";
import Calculator from "./study/Calculator";
import ListTest from "./study/ListTest";
import Tabs from "./components/Tabs/Tabs";

function App() {
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://wow9144.github.io/tabs.json');
        //https://wow9144.github.io/books.json
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                const data = JSON.parse(xhr.response);
                setInterestList(data.data);
            }
        };
        xhr.send();
    }, []);
    const [interestList, setInterestList] = useState([]);
    // const list = [
    //     {title: '리빙', color: 'green'},
    //     {title: '푸드', color: 'orange'},
    //     {title: '스포츠', color: 'blue'},
    //     {title: '자동차', color: 'darkgreen'},
    //     {title: '패션뷰티', color: 'pink'}
    // ];
    // const list2 = [
    //     {title: '하하하하', color: 'green'},
    //     {title: 'ㅋㅋㅋㅋㅋ', color: 'orange'}
    // ];
    return (
        <div>
            <Tabs list={interestList}>
                <div>1111</div>
                <div>2222</div>
                <div>3333</div>
                <div>4444</div>
                <div>5555</div>
            </Tabs>
            <Tabs list={list2} />
            {/*<Counter />*/}
            {/*<hr />*/}
            {/*<InputMirror />*/}
            {/*<hr />*/}
            {/*<Calculator />*/}
            {/*<hr />*/}
            {/*<ListTest />*/}
        </div>
    )
}
export default App;




