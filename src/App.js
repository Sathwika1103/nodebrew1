import './App.css';
import FirstFold from './components/FirstFold';
import Navbar from './components/Navbar';
import Details from './components/Details';
import FeedbackForm from './components/FeedbackForm';

function App() {
  return (
    <>
      <Navbar/>
      <FirstFold/>
      <Details/>
      <FeedbackForm />
    </>
  );
}

export default App;