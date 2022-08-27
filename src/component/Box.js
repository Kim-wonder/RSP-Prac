import React from "react";

const Box = (props) => {   
    let result;
    if ( props.title === "Computer" &&
        props.result !== "TIE" &&
        props.result !== "") {
// 카드가 컴퓨터 카드이고, 결과가 "tie" 가 아니고, 결과값이 공백이 아닐 때
        result = props.result === "WIN" ? "LOSE" : "WIN";
    } else {// 위 경우가 아니라면 props로 전달된 결과를 그대로 도출한다.
        result = props.result;
    }
    return (
    <div className={`box${result}`}>
        <h2>{props.title}</h2> {/*속성값을 입력해야 정확하게 바꿀 수 있다.*/}
        <h2>{props.item && props.item.name}</h2>
        <img alt="" className="item-img" src={props.item && props.item.img} />
        {/*props를 쓸 때 가드값(props.item)을 주의해야한다. 초기값이 불분명하면 에러가 나기 때문에 */}
        <h3>{result}</h3>
    </div>
    );
};

export default Box;
