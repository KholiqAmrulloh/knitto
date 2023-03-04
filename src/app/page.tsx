"use client"
import React from 'react'
import { store } from '@/store'
import { Provider } from 'react-redux'
import AddTodos from './components/AddTodos'

const Home = () => {
  return (
    <Provider store={store}>
      <AddTodos />
    </Provider>
  )
}

export default Home