import './App.css'

function App() {
  const name = "Artemis Levitt";

  //const date = new Date(2024, 9, 8, 23);

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentTime = date.getHours();

  let timeColor = "black";
  let timeOfDay = "";

    if (currentTime >= 0 && currentTime < 6 ) {
        timeColor = "violet";
        timeOfDay = "Night";
    } else if (currentTime >= 6 && currentTime < 12) {
        timeColor = "yellow";
        timeOfDay = "Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
        timeColor = "green";
        timeOfDay = "Afternoon";
    } else if (currentTime >= 18 && currentTime < 24) {
        timeColor = "blue";
        timeOfDay = "Evening";
    }

  return (
    <>
      <h1 className="heading" style={{color: timeColor}}>Good {timeOfDay}!</h1>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </>
  )
}

export default App
