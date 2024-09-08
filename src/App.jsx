import './App.css'

function App() {
  const name = "Artemis Levitt";

  //const date = new Date(2024, 9, 8, 23);

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentTime = date.getHours();

  let timeColor = "black";
  let timeOfDay = "";
  const customStyle = {
      color: ""
  }

    if (currentTime >= 0 && currentTime < 6 ) {
        timeColor = customStyle.color = "violet";
        timeOfDay = "Night";
    } else if (currentTime >= 6 && currentTime < 12) {
        timeColor = customStyle.color = "yellow";
        timeOfDay = "Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
        timeColor = customStyle.color = "green";
        timeOfDay = "Afternoon";
    } else if (currentTime >= 18 && currentTime < 24) {
        timeColor = customStyle.color = "blue";
        timeOfDay = "Evening";
    }

  return (
    <>
      <h1 className="heading" style={customStyle}>Good {timeOfDay}!</h1>
      <p>Created by {name}</p>
      <p>Copyright {currentYear}</p>
    </>
  )
}

export default App
