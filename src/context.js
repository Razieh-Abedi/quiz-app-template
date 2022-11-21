import React, { useState, useEffect, useContext } from "react";
const API_ENDPOINT = "";
const url = "";
const tempUrl = "";

const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  <AppContext.Provider value="hello">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
    return useContext(AppContext)
};

export { AppContext, AppProvider };
