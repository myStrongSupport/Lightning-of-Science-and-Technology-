import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <Router className="App">
      <Header />
      <Pages />
    </Router>
  );
}

export default App;
