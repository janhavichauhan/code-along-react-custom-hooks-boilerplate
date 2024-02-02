
import './App.css'
import Storage from './Storage'

function App() {
  const [input, setInput] = Storage('Input');

  return (
    <>
    <input type="text" 
    value={input} 
    onChange={(e) => setInput(e.target.value)} />
     
    </>
  )
}

export default App
