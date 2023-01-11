import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const questions = [
    {
      questionText: 'which one is correct',
      anwerOption: [
        {anwerText: 'wrong', isCorrect: false},
        {anwerText: 'wrong ', isCorrect: false},
        {anwerText: 'correct', isCorrect: true},
        {anwerText: 'wrong', isCorrect: false},
      ],
    },

    {
      questionText: 'which one is correct',
      anwerOption: [
        {anwerText: 'wrong', isCorrect: false},
        {anwerText: 'correct', isCorrect: true},
        {anwerText: 'wrong', isCorrect: false},
        {anwerText: 'wrong', isCorrect: false},
      ],
    },
  ]

  // const [questions,setQuestions] = useState([])

  const [currentQuiz,setCurrentuiz] = useState(0)

  const [showScore, setshowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleButton = (isCorrect) => {

    if(isCorrect === true){
      alert("this answer  is correct!!")
      setScore(score + 1);
    }else{
      alert("this answer  is wrong!!")
    }

    const nextquiz = currentQuiz +1;
    if(nextquiz < questions.length){
      setCurrentuiz(nextquiz);
    } else {
      setshowScore("finish")
    }
  }

  // useEffect(() => {
  //   fetch("https://api-question.narr0225.repl.co/questions")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((questions) => setQuestions(questions));
  //     console.log(questions)
  // }, []);

  return (
    <div className="App">
      {showScore ? (
        <h1>Your score is {score}/{questions.length}</h1>
      ):(
        <>
          <h1>{questions[currentQuiz].questionText}</h1>
          <div className='question-text'>
            {questions[currentQuiz].anwerOption.map((anwerOption) => 
              <button onClick={() => handleButton(anwerOption.isCorrect)}>{anwerOption.anwerText}</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
