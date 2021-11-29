import './App.css'
import React ,{useState,useEffect }from 'react'
import SingleCard from './components/SingleCard'
const cardImages =[
  {"src": '../img/helmet-1.png',matched: false } ,
  {"src": '../img/potion-1.png',matched: false },
  {"src": '../img/ring-1.png'  ,matched: false },
  {"src": '../img/scroll-1.png',matched: false },
  {"src": '../img/shield-1.png',matched: false },
  {"src": '../img/sword-1.png' ,matched: false },
]
function App() {
  const [cards, setCards ] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const shuffleCards = ()=> {
    const shuffledCards =[
      // this below spreading gives two sets of 6 so 12 needed
      ...cardImages, ...cardImages].sort(()=> Math.random() -0.5 )
      .map((card)=> ({...card, id: Math.random()}))
      setCards(shuffledCards)
      setTurns(0)
  }
  // this will create a shuffled array above
  const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
// compare two cards  
useEffect(()=> {
if (choiceOne && choiceTwo){
  if (choiceOne.src === choiceTwo.src){
    console.log("these cards match")
    resetTurn()
  }else {
    console.log("the cards didnt match")
    resetTurn()
  }
}
},[choiceOne,choiceTwo])

const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns +1)
}
return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
     <div className="card-grid">
      {cards.map(card => ( 
    <SingleCard 
    key={card.id} 
    card={card}
    handleChoice ={handleChoice}
    />
   ))}
    </div>
    </div>
  );
}

export default App