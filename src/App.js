import { Routes, Route, BrowserRouter } from "react-router-dom"
import Workflow from "./pages/Workflow"
import Dashboard from "./pages/Dashboard"
import Layout from "./layout";

function App() {
 return (
   <div className="App">
   
     <BrowserRouter>
     <Layout>
       <Routes>
         <Route>
       
           <Route path="/" element={<Workflow />} />
           <Route path="/dashboard" element={<Dashboard />} />
         
         </Route>
       </Routes>
       </Layout>
     </BrowserRouter>
   
   </div>
 )
}

export default App
