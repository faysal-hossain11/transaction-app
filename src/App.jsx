import CardGrid from "./component/CardGrid/CardGrid"
import FormInput from "./component/FormInput/FormInput"
import Layout from "./component/Layout/Layout"
import TopHeader from "./component/TopHeader/TopHeader"


function App() {


  return (
    <div>
        <Layout>
          <TopHeader />
          <div className=" grid gap-5 grid-cols-2">
            <FormInput />
            <CardGrid  />
          </div>
        </Layout>
    </div>
  )
}

export default App
