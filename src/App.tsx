
import Alert from './components/Alert';
import Button from './components/Button';
import Exercise from './components/Exercise';
import ListGroup from './components/ListGroup'
function App() {
  const items = ["Tokyo", "Paris", "Nairobi", "São Paulo", "Vancouver"];
  const handleOnSelectItem = (item: string) => {
    console.log(item);
  }
  let flag = false;
  const handleButtonClick = () => { console.log("Button Clicked"); flag = true }
  return <div>
    {/* <h1>MY APP</h1>
    <ListGroup items={items} heading='Cities' onSelectItem={handleOnSelectItem} />
    <Alert>Hello <span>World</span></Alert>
    <Button onButtonClick={handleButtonClick} color='success'>Button </Button> */}
    <Exercise  color='success' >
      Button
    </Exercise>
  </div>
}
export default App
