/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'


//Context
const NewsContext = createContext()

//Provider
const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general')

    useEffect(() => {
        const callApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            console.log(data);
        }
        callApi()
    }, [category])
    

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return(
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}
export {
    NewsProvider
}

export default NewsContext