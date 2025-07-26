
import Login from './components/Login'
import Profile from './components/profile'
import UserContextProvider from './context/userContextProvider'
function App() {
  

  return (
    <UserContextProvider>
      <h1>Hello This is Nabin</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
