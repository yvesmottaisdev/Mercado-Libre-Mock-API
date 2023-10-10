import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext();

export const useApplyContext = () => {
    return useContext(AppContext);
}

export const AppProvider = ({children}) => {
    
    const [sendCategory, setSendCategory] = useState('');
    const [sendQuery, setSendQuery] = useState([]);

    const handleQuery = (data) => {
        setSendQuery(data);
    }

    const handleCategory = (data) => {
        setSendCategory(data);
    }

    return (
        <AppContext.Provider value={{sendCategory, handleCategory, sendQuery, handleQuery}}>
            {children}
        </AppContext.Provider>
    )

}

// export {AppContext, AppProvider};
