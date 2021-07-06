import Form from './Form'
import MultipleForm from './MultipleForms'
import ShoppingList from './FormComponents/ShoppingList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         Forms
        <Form/>
        <MultipleForm/>
        <ShoppingList />
      </header>
    </div>
  );
}

export default App;
