import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {HomePage} from './pages/home-page'
import { Header } from "./components/header";


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
