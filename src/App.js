import { Toaster } from "react-hot-toast";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <div>
        <Toaster position="top-center" />
      </div>
      <Map />
    </div>
  );
}

export default App;
