import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useRoutes } from "react-router-dom";
import "./App.css";
import routerConfig from "./routes/router-config";
function App() {
    const ele = useRoutes(routerConfig);
    return _jsx(_Fragment, { children: ele });
}
export default App;
