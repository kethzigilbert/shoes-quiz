
import './App.css';
import {Home,QuizQuestion,QuizScores} from './views'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/quiz" element={<QuizQuestion/>}></Route>
      <Route path="/quiz-scores" element={<QuizScores/>}></Route>
    </Routes>

  );
}

export default App;
