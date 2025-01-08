import React from 'react'
// aqui estou importando os dois do logged-in, facilitando o caminho
import { Dashboard, Home } from './pages/logged-in'

function App() {
  return (
    <React.Fragment>
      <Home />
      // usando a prop no componente
      <Dashboard label='professor-corrêa'/>
    </React.Fragment>
  )
}

export default App
