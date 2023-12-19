/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext, createContext } from 'react'
import axios from 'axios'


//Context
const NewsContext = createContext()

//Provider
const NewsProvider = ({children}) => {

    const [category, setCategory] = useState('general')
    const [news, setNews] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const callApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles);
            setTotalNews(data.totalResults)
            setPage(1)
        }
        callApi()
    }, [category])


    useEffect(() => {
        const callApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?page=${page}&language=en&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNews(data.articles);
            setTotalNews(data.totalResults)
        }
        callApi()
    }, [page])


    
    const handleChangePage = (e, value) => {
        setPage(value);
    }

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    return(
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                news,
                totalNews,
                handleChangePage,
                page
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