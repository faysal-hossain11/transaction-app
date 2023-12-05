import CardGrid from "./component/CardGrid/CardGrid"
import FormInput from "./component/FormInput/FormInput"
import Layout from "./component/Layout/Layout"
import TopHeader from "./component/TopHeader/TopHeader"


function App() {


  return (
    <div>
        <Layout>
          <TopHeader />
          <FormInput />
          <CardGrid  />
        </Layout>
    </div>
  )
}

export default App
