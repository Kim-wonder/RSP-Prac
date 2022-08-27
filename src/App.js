import React from 'react';
import './App.css'
import Box from './component/Box';
import {useState} from 'react';

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


const App = () => {

  const [userSelect,setUserSelect] = useState(null);
  const [comSelect,setComSelect] = useState(null);
  const [result,setResult] = useState("");

  const choiceHandler = (userChoice)=>{
    // 1. 내가 선택한 값
    setUserSelect(choice[userChoice]);
    //userSelect = choice[userChoice]
    //state값을 바꾸려면 setState 함수를 정의하여 사용해야한다.

    // 2. 컴퓨터가 선택한 값
    let comChoice = randomChoice();
    setComSelect(comChoice);

    // 3. 내 값과 컴퓨터의 값 비교 / judgement(유저선택값,컴퓨터선택값)
    // judgement(choice[userChoice],comChoice)
    // 5. 4번의 return값이 string 이므로 
    setResult(judgement(choice[userChoice],comChoice));
  };

  //매개변수를 받을 수 있는 두개의 매개변수 이름 = user,com
  const judgement = (user, com) => {
    console.log("유저는 ",user,"컴퓨터는 ",com);
// 가위바위보 로직
    //user == com tie
    //user == rock, com == scissors - user win
    //user == rock, com == paper - user lose
    //user == scissors, com == paper - user win
    //user == scissors, com == rock - user lose
    //user == paper, com == rock - user win
    //user == paper, com == scissors - user lose
//코드 겁나 길어짐. 삼항 연산식으로 바꿔보자
    // if(user.name === com.name){
    //   return "TIE"
    // }else if (user.name === "rock"){
    //   if(com.name === "scissors"){
    //     return "WIN"
    //   }else {
    //     return "LOSE"
    //   }
    // }

// 4. 삼항연산식 :: return값은 string 문자열이다.
    if(user.name === com.name){
      return "TIE"
    } else if (user.name === "rock") 
    return com.name === "scissors" ? "WIN" : "LOSE"
    else if (user.name === "scissors") 
    return com.name === "paper" ? "WIN" : "LOSE"
    else if (user.name === "paper") 
    return com.name === "rock" ? "WIN" : "LOSE"
  }

  const randomChoice = () => {
    //객체에 키값(rock,scissors,paper)만 뽑아서 어레이로 만들어주는 함수
    let itemArray = Object.keys(choice); //Object는 O가 대문자다!
    console.log("아이템",itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length); 
    //Math.random => 0~1  사이에 랜덤한 수를 반환한다.
    //Math.floor => 소수점 아래 숫자를 버림.
    console.log("random벨류", randomItem);

    //Math.random 과 Math.floor을 이용해 랜덤값의 정수부분을 얻었다!
    let final = itemArray[randomItem]
    //이제 랜덤한 정수를 itemArray 안에 넣으면 final이 랜덤하게 적용된다.(rock,scissor,paper) 
    console.log("파이널",final);
    return choice[final]; //이게 결국 comChoice 안으로 들어가게 된다.
  };

  return (
    <div>
      <div className='main'>
        <Box title="YOU" item={userSelect} result={result} />
        <Box title="Computer" item={comSelect} result={result} />
      </div>
      <div className='main'>
        <button onClick={() => choiceHandler("scissors")}>가위</button>
        <button onClick={() => choiceHandler("rock")}>바위</button>
        <button onClick={() => choiceHandler("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
