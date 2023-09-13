import { usePreviewContext } from "./context/PreviewProvider";
import Main from "./layouts/Main"
import Navbar from "./layouts/Navbar"
import Lightbox from "./components/Lightbox";

const App = () => {
  const { isLignboxOpen } = usePreviewContext()

  return (
    <>
      <Navbar />
      <Main />

      {/* lightbox modal */}
      { isLignboxOpen && <Lightbox /> }
    </>
  )
}

export default App
