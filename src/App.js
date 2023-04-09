
// import MainNavBar from './components/state-checkpoint/navbar';
// import Profile from './components/state-checkpoint/profile';
import {React} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainHeader from "./components/hooks-checkpoint/MainHeader";
import Watchlist from "./components/hooks-checkpoint/Watchlist";
import Watched from "./components/hooks-checkpoint/Watched";
import Add from "./components/hooks-checkpoint/Add";
import "./App.css";
import "./lib/font-awesome/css/all.min.css";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<Watchlist />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}


// For checkpoint state
// return (
//   <div className='App'>
//       {/* <MainNavBar></MainNavBar> */}
//             <div className="checkpoint-box">
//                 {/* <Profile/> */}
//             </div>
//     </div>
// )

export default App;
