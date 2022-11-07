// import { Toaster } from "react-hot-toast";
// import AddTools from "./components/AddTools";
// import Map from "./components/Map";
// import SideTools from "./components/SideTools";
import { ToastContainer } from "react-toastify";
import AppLayout from "./components/AppLayout";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer position="top-right" />
      <AppLayout />
    </div>
  );
}

export default App;
