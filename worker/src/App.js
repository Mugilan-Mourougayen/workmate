import Signup from './Components/Signup';
import Signin from './Components/Signin';
import { Route, Routes ,Navigate} from "react-router-dom"
import Home from './Components/Home';
import Sidebarmain from './Components/Sidebarmain';
import { useEffect,useState } from 'react';

// redux tool kit
import { useSelector, useDispatch } from 'react-redux'
import { adddetails } from './features/detailsSlice'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const details = useSelector((state) => state.details.value)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token');
  console.log("hello",token)
    const checkAuthentication = async (token) => {
      try {
        const response = await fetch('http://localhost:5000/auth/verifyworker', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
      
        if (response.ok) {
          const data = await response.json(); // Parse the response data
          // Access and handle the data as needed
          console.log(data.data);

          dispatch(adddetails(data.data))
          setIsAuthenticated(true);
          
          
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        // Handle the error, such as logging or setting the state to false
        setIsAuthenticated(false);
      }
    };
  if(token){

    checkAuthentication(token);
  }else{
    setIsAuthenticated(false);
  }
  }, []);
  return (
    <div className="App">
       <Routes>
    
       
       <Route path="/"   exact  element={isAuthenticated ? <Navigate to="/main" />  : <Home />}/>
       <Route path="/signin" exact element= {isAuthenticated ? <Navigate to="/main" /> : <Signin />} />
       <Route path="/main" exact element={isAuthenticated ? <Sidebarmain /> : <Navigate to="/signin" />} />
       <Route path="/signup" exact element= {isAuthenticated ? <Navigate to="/main" /> : <Signup />}  />


    </Routes>
 

    </div>
  );
}

export default App;
