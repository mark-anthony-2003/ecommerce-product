import Information from "../components/Information";
import Preview from "../components/Preview";


const Main = () => {
   return (
      <main className="grid grid-cols-2 mx-40 mt-24 gap-8">
         <Preview />
         <Information />
      </main>
   )
}

export default Main
