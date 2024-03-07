import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContext } from "../contexts/context";
import { HeaderProviderProps } from "./interfase";

const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
  const [header, setHeader] = useState<string>("");

  const url = useLocation().pathname;

  const changeHeader = () => {
    switch (url) {
      case "/registration":
        setHeader("Зарегистрироваться в системе");
        break;

      case "/authorization":
        setHeader("Войти в систему");
        break;

      case "/main":
        setHeader("Приемы");
        break;

      default:
        setHeader("");
    }
  };

  useEffect(() => {
    changeHeader();
  }, [url]);

  return (
    <HeaderContext.Provider value={header}>
      {children}
    </HeaderContext.Provider>
  );
};

export default HeaderProvider;
