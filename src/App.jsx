import { useState } from "react";
import CentralCircle from "./components/CentralCircle";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen flex items-center justify-center"
          : "bg-white text-black min-h-screen flex items-center justify-center"
      }
    >
      <CentralCircle />
    </div>
  );
}

export default App;
