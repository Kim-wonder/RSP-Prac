import React from "react";

const Box = (props) => {
    console.log("props오나요?",props);
    return (
    <div className="box">
        <h2>{props.title}</h2> {/*속성값을 입력해야 정확하게 바꿀 수 있다.*/}
        <img className="item-img" src="https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzNzE2NHxpbWFnZS9qcGVnfGltYWdlcy9oZWMvaDkwLzE2MDE2OTAwOTgwNzY2LmpwZ3xmNGEwMjM4MmZlODc3OTcyYzRkMGRiNzFjYTg0MmNjYTc0NjM2YzM0MTI4Mjg3NmI0NzlmYzJhODY2OGM0ZmFi"/>
        <h3>Win</h3>
    </div>
    );
};

export default Box;
