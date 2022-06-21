import { useState, createContext, useEffect, useReducer } from 'react';
import StateReducer from './StateReducer';

const initialState ={
    loading: true,
    page: 'loading',
}


//Create Context
export const GlobalContext = createContext(initialState);

GlobalContext.displayName = "Retro_wave context";

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(StateReducer, initialState);


    const clearLoading = ()=>{
        dispatch({
            type: 'CLEAR_LOADING'
        })
    }

    const setPage = (_page)=>{
        console.log(_page)
        dispatch({
            type: 'SET_PAGE',
            payload: _page
        })
    }

    //console.log(state)

    return(
        <GlobalContext.Provider value={{
            loading: state.loading,
            page: state.page,
            clearLoading,
            setPage,
        }} >
            {children}
        </GlobalContext.Provider>
    )
}