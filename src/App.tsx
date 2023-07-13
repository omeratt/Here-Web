import "./App.css";
import TopHeaderLine from "./components/TopHeaderLine";
import FirstPage from "./pages/FirstPage";

function App() {
  return (
    <div className=" h-screen  overflow-auto bg-[#242424]  pt-6">
      <FirstPage />

      <div className={`h-full bg-second`}></div>
    </div>
  );
}

export default App;
