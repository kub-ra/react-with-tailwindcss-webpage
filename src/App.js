
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Footer from './components/Footer';



function App() {
  return (
  
      
      <div className='bg-gray mb-0'>
      <Router>
          
        
       
        <Switch>
          <Route path="/login" >
            
          </Route>
          <Route path="/users">
        
          </Route>
          <Route path="/">
          
          </Route>
        </Switch>
     
    </Router>
    
      

      <Navbar/>
      <Header/>
      <Footer/>
     
      
      
    
      
    </div>
  );
}

export default App;
