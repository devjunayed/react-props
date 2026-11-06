import AdjustBasedProps from "./AdjustBasedProps/AdjustBasedProps";
import Profile from "./components/Profile";
import Gallery from "./ExtractComponent/Gallery";
import PassingChildrenProp from "./PassingChildrenProp/PassingChildrenProp";

const App = () => {
  return (
    <div>
      <Profile />
      <h1>Extract a component</h1>
      <Gallery />
      <h1>Adjust Based Props</h1>
      <AdjustBasedProps />
      <h1>Passing Children Prop</h1>
      <PassingChildrenProp />
    </div>
  )
}

export default App