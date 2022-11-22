import React, { useState, useEffect, useContext } from "react";
import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";
import AppContext from "./context"

// import { useGlobalContext } from "./context";

function App() {
  // const [ waiting, loading, questions, index, correct ] = useContext(AppContext);
  const [waiting, setWaiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={[waiting, loading, questions, index, error, correct, isModalOpen]}
    >
      <div>test</div>
    </AppContext.Provider>
  );
}

export default App;

// function App() {

//   return <>
//  <AppProvider>
//  <SetupForm/>
//  hi
//  </AppProvider>
//   </>
//   }

// export default App;
