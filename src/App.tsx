import { useRoutes } from "react-router-dom";
import "./App.css";
import routerConfig from "./routes/router-config";

function App() {
  const ele = useRoutes(routerConfig);
  return <>{ele}</>;
}

export default App;
