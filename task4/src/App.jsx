import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './components/UserDetails'

function App() {
  const users = [
    { id: 1, name: 'Alice', age: 25, profession: 'Engineer' },
    { id: 2, name: 'Bob', age: 16, profession: 'Student' },
    { id: 3, name: 'Charlie', age: 30, profession: 'Teacher' }
  ]

  return (
    <>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          profession={user.profession}
        />
      ))}
    </>
  )
}

export default App
