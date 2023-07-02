import React from 'react'
import './App.css'
import { Balance } from './components/Balance'
import { History } from './components/History'
import { AddTransaction } from './components/AddTransaction'

const App = () => {

  return (
    <>
      <Balance />
      <History />
      <AddTransaction />
    </>
  )
}

export default App
