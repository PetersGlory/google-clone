import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext();

export const StateProvider = ({
    reducer, initialState, children
}) =>(
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook that allows us to pull datas from the data layer
export const useStateValue =() => useContext(StateContext);
