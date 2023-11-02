import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { privateRoutes, publicRoutes } from './routes'
import UserLayout from "./components/Layouts/UserLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {publicRoutes.map((route, idx)=>{
            const Layout = route.layout || UserLayout
            const Page = route.component
            return (
              <Route
                key={idx}               
                path={route.path}
                element={
                  <Layout>
                      <Page />
                  </Layout>
                }
              />
            )
          })} 
          ||
          {privateRoutes.map((route, idx)=>{
            const Layout = route.layout || UserLayout
            const Page = route.component
            return (
              <Route
                key={idx}               
                path={route.path}
                element={
                  <Layout>
                      <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}


export default App;
