import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/blog_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'

const initialState = {
  isSidebarOpen: false,
}

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }
  return (
    <BlogContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </BlogContext.Provider>
  )
}

export const useBlogContext = () => {
  return useContext(BlogContext)
}
