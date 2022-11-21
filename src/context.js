import React, { useState, useEffect, useContext } from "react";
const API_ENDPOINT = "https://opentdb.com/api.php?";
const url = "";
const tempUrl =
  "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [error, setError] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  <AppContext.Provider
    value={{waiting, loading, questions, index, error, correct, isModalOpen}}
  >
    {children}
  </AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
