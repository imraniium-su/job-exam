import logo from './logo.svg';
import './App.css';
import Personal from './components/usersfile/Personal';
import Userapi from './components/Userapi';
import Parrentcomponents from './components/usersfile/Parrentcomponents';

const ChildComponent1 = () => <h2>This is child components example</h2>;
const ChildComponent2 = () => <h2>This one another child components example </h2>;

function App() {
  return (
    <div >
      <div>

        <Personal></Personal>
        <Userapi></Userapi>
      </div>
      <div>
        <Parrentcomponents>
          <ChildComponent1 />
        </Parrentcomponents>
        <Parrentcomponents>
          <ChildComponent2 />
        </Parrentcomponents>
      </div>
    </div>
  );
}

export default App;
