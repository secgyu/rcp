import { useState } from "react";
import "./App.css";
import Box from "./componemt/Box";

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위바위보 버튼
// 3. 버튼 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 선택이 된다.
// 5. 3,4 결과를 가지고, 누가 이겼는지 승패를 따짐
// 6. 이기면 초록, 지면 빨강, 비기면 검정 테두리 즉, border solid

const choice = {
  rock: {
    name: "Rock",
    img: "https://cdn-icons-png.flaticon.com/128/1867/1867550.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://cdn-icons-png.flaticon.com/512/4301/4301274.png"
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOg5414TyQpoP6H9a1MNta8JPlbeWsTHD54A&s",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}><img className="rsp" src="https://cdn-icons-png.flaticon.com/512/4301/4301274.png" alt=""/></button>
        <button onClick={() => play("rock")}><img className="rsp" src="https://cdn-icons-png.flaticon.com/128/1867/1867550.png" alt=""/></button>
        <button onClick={() => play("paper")}><img className="rsp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOg5414TyQpoP6H9a1MNta8JPlbeWsTHD54A&s" alt=""/></button>
      </div>
    </div>
  );
}

export default App;
