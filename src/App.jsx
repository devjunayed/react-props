import AdjustBasedProps from "./AdjustBasedProps/AdjustBasedProps";
import Profile from "./components/Profile";
import Gallery from "./ExtractComponent/Gallery";

const App = () => {
  return (
    <div>
      <Profile />
      <h1>Extract a component</h1>
      <Gallery />
      <h1>Adjust Based Props</h1>
      <AdjustBasedProps />
    </div>
  )
}

export default App