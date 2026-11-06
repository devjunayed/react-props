import Profile from "./components/Profile";
import Gallery from "./ExtractComponent/Gallery";

const App = () => {
  return (
    <div>
      <Profile />
      <h1>Extract a component</h1>
      <Gallery />
    </div>
  )
}

export default App