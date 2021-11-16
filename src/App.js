import { useState } from "react";
import "./App.css";
import SystemData from "./pages/SystemData";
import SystemDiagnosticsManager from "./pages/SystemDiagnosticsManager";
import SystemState from "./pages/SystemState";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTab1 = () => {
    setActiveTab("tab1");
  };

  const handleTab2 = () => {
    setActiveTab("tab2");
  };

  const handleTab3 = () => {
    setActiveTab("tab3");
  };

  return (
    <div className="App">
      <div className="tabs">
        <ul className="nav">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={handleTab1}
          >
            System Data
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={handleTab2}
          >
            System Diagnostics Manager
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={handleTab3}
          >
            System State
          </li>
        </ul>

        <div className="outlet">
          {activeTab === "tab1" && <SystemData />}
          {activeTab === "tab2" && <SystemDiagnosticsManager />}
          {activeTab === "tab3" && <SystemState />}
        </div>
      </div>
    </div>
  );
}

export default App;
