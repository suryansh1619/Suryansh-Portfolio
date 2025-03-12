import React, { createContext, useReducer, useEffect } from 'react';
import { initialState,reducer } from '../reducer/Reducer';
import StaticData from '../StaticData';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);;
    useEffect(() => {
        const fetchData = async () => {
            try {
                await new Promise(resolve => setTimeout(resolve, 1000));
                dispatch({ type: "SET_DATA", payload: StaticData});
                console.log("Data saved");
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};
