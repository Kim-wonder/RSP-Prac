import { useState } from 'react';
import React from 'react';

const choice = {
    rock:{
        name:'rock',
        img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
    },
    scissors:{
        name:'scissors',
        img:"https://www.tefal.co.kr/medias/?context=bWFzdGVyfGltYWdlc3wzNzE2NHxpbWFnZS9qcGVnfGltYWdlcy9oZWMvaDkwLzE2MDE2OTAwOTgwNzY2LmpwZ3xmNGEwMjM4MmZlODc3OTcyYzRkMGRiNzFjYTg0MmNjYTc0NjM2YzM0MTI4Mjg3NmI0NzlmYzJhODY2OGM0ZmFi"
    },
    paper:{
        name:'paper',
        img:"https://sbgroupnepal.com/wp-content/uploads/2020/03/0pman2.jpg"
    },
};


const Button = ({userSelect,setUserSelect}) => {

    

    const choiceHandler = (userSelect)=>{
        setUserSelect(choice[userSelect])
        //userSelect = choice[userChoice]
        //state값을 바꾸려면 setState 함수를 정의하여 사용해야한다.
    }

    

    return (
        <div>
            <button onClick={() => choiceHandler("scissors")}>가위</button>
            <button onClick={() => choiceHandler("rock")}>바위</button>
            <button onClick={() => choiceHandler("paper")}>보</button>
        </div>
    );
}

export default Button;
