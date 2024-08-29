import './App.css'

function App() {
  const name = "Artemis Levitt";
  const currentYear = new Date().getFullYear();
  return (
    <>
      <h1>Site</h1>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </>
  )
}

export default App
