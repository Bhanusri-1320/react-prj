
import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import Exercise from './components/Exercise';
import ListGroup from './components/ListGroup'
function App() {
  const items = ["Tokyo", "Paris", "Nairobi", "São Paulo", "Vancouver"];
  const handleOnSelectItem = (item: string) => {
    console.log(item);
  }
  const [flag, setFlag] = useState(false);
  const handleButtonClick = () => { console.log("Button Clicked"); }
  return <div>
    {/* <h1>MY APP</h1>
    <ListGroup items={items} heading='Cities' onSelectItem={handleOnSelectItem} />
    <Alert>Hello <span>World</span></Alert>}
    <Button onButtonClick={handleButtonClick} color='success'>Button </Button> 
    {/* <Exercise  color='success' >
      Button
    </Exercise> */}
    {flag && <Alert closeButton={() => setFlag(false)}>Alert!</Alert>}
    <Button onButtonClick={() => { setFlag(true) }} color='success'>Button </Button>
  </div>
}
export default App
