import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/itemlistcontainer'

function App() {
  

  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"holaa Bienvenido a mi Ecommerce"} />
    </div>
  )
}

export default App
