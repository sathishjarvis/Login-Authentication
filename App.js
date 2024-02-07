import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';
import Antdesign from './Components/AntDesign';
// import  Layout  from './Components/Layout';
import  SignUp  from './Components/SignUp';
// import Home from './Pages/Home';
function App() {

  return (
    <>
  {/* const router = createBrowserRouter(
    createRoutersFromElements(
      <Route path="/" element={<Layout />}>
      <Route path="dashboard" element={<Antdesign />} />
      <Route path="about" element={<SignUp />} />
    </Route>
    )
  ) */}
    <Routes>
      {/* <Route path="/" element={<Layout />} /> */}
      <Route index element={<Antdesign />} />
      <Route path="landing" element={<Landing />} />
      <Route path='signUp' element={<SignUp/>}></Route>
      </Routes>

      {/* <Route path='home' element={<Home />} /> 
      <Routes path='about' element={<About/>}
      <Route path='Portpolio' element={<Portpolio/>}/>
      <Route path='Service' element={<Service/>}/>
      /> */}
    </>

  );
}

export default App;

