import { ThemeProvider } from "./context/ThemeContext";
import CamelMilkLanding from "./CamelMilkLanding";

function App() {
  return (
    <ThemeProvider>
      <CamelMilkLanding />
    </ThemeProvider>
  );
}

export default App;
