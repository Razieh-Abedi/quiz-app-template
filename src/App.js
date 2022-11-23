import React, { useState, useEffect, useContext } from "react";
import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";

import { useGlobalContext } from "./context";

function App() {
  const { waiting, loading, questions, index, correct } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  return <div>test</div>;
}

export default App;
