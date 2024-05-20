import Navbar from "./components/navbar";
import Home from "./routes/home";
import PageContainer from "./ui-kit/page-container";

function App() {

  return (
      <PageContainer class="page-container">
      <Navbar />
        <Home />
      </PageContainer>
  )
}

export default App
