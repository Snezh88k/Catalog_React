import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
