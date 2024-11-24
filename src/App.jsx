import {Route,createBrowserRouter,
  createRoutesFromElements,
RouterProvider} from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';


const App = () => {
 
    
  
  const router =createBrowserRouter(
    createRoutesFromElements(
      <><Route path='/' element={<Home />} />
     </>

 
    )
  );
  
   return <RouterProvider router={router} />;
  
};

export default App
