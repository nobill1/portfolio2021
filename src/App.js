import './App.css';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className="grid w-full h-full">
      <Navbar className="row-start-1 row-end-2"/>
      <Main className="row-start-3 row-end-4" id="Main"/>
      <Footer className="row-start-5 row-end-6"/>
    </div>
  );
}

export default App;
