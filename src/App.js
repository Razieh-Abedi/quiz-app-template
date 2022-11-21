import React from "react";
import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
import { AppProvider } from "./context";


function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  return <>
 <AppProvider>
 <SetupForm/>
 hi
 </AppProvider>
  </>
  }



export default App;
