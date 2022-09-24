import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Result from './Components/Result';
import toast, { Toaster } from 'react-hot-toast';
function App() {

  
  return (
    <div className="App">
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Result></Result>
    </div>
  );
}

export default App;
