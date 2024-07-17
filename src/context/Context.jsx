import React from "react";
import { createContext } from "react";
import { useState } from "react";
export const PageContext = createContext();
const PageContextProvider = ({ children }) => {
    const [referopen, setReferopen] = useState(false);

    const value = {
        referopen,
        setReferopen,
    };
    return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
