import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import PageContainer from "./ui-kit/page-container";

function App() {

  return (
      <PageContainer class="page-container">
      <Navbar />
        <Outlet />
      </PageContainer>
  )
}

export default App
