import React from "react";
import setupForm from "./setupForm";
import Modal from "./Modal";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
import { AppProvider } from "./context";
function App() {
  return <div>
    <AppProvider></AppProvider>
  </div>;
}

export default App;
