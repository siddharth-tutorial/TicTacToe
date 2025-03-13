// import logo from './logo.svg';
import { Route, Routes } from 'react-router';
import Home from './Home';

import TicTacToe from './TicTacToe';

<script src="https://cdn.tailwindcss.com"></script>
function App() {
  return (
    <div>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/tictactoc' element={<TicTacToe/>}/>
</Routes>

    </div>
  );
}

export default App;
