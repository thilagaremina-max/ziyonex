
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IoTProducts from './components/ourproducts/iot';
import WebDevelopment from './components/ourproducts/webdevelopment';
import SoftwareSolution from './components/ourproducts/softwaresolution';
import MLProducts from './components/ourproducts/mlproducts';
import BusinessApplication from './components/ourproducts/businessappliction';
import Services from './components/services';
import Contact from './components/contact';
import Registration from './components/registrationform';

function App() {
  return (
    <div className="App">
    <div className="container-fluid">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/iotproducts" element={<IoTProducts />}/>
         <Route path="/webdevelopment" element={<WebDevelopment />}/>
         <Route path="/softwaresolution" element={<SoftwareSolution />}/>
         <Route path="/mlproducts" element={<MLProducts />}/>
         <Route path="/businessappliction" element={<BusinessApplication />}/>
         <Route path="/services" element={<Services />}/>               hhygvgyuu
         <Route path="/contact" element={<Contact />}/>
         <Route path="/registration" element={<Registration />}/> 
            
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
