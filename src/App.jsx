import { AuthProvider } from "./context/AuthProvider";
import { Header } from "./Pages/Header";
import { Hero } from "./Pages/Hero";

function App() {
  return (
    <div className="main-container">
      <AuthProvider>
        <Header />
        <Hero />
      </AuthProvider>
    </div>
  );
}

export default App;
