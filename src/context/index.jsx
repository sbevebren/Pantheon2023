"use client"
import React, { useContext, createContext, useEffect, useState } from "react";

const StateContext = createContext();





//use local storage hook
function useLocalStorage(key, initialValue, isSSR) {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isSSR) {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (!isSSR) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}


export const StateContextProvider = ({ children }) => {

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [user, setUser] = useLocalStorage("user", false, isSSR);
  const [userinfo, setUserInfo] = useLocalStorage("userinfo", {}, isSSR);


  return (
    <StateContext.Provider
      value={{
        user,
        userinfo,
        setUser,
        setUserInfo
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
