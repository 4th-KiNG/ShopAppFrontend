import { BrowserRouter } from "react-router-dom";
import Router from "./pages/Router";
import { Header } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
