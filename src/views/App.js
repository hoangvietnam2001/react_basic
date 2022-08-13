import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>MY EX GIRLFRIENDS</h4>
        <div>
          <ListTodo/>
        </div>
      </header>
    </div>
  );
}

export default App;
