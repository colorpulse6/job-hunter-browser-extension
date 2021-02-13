import { useEffect, useState } from 'react'
import axios from 'axios'
import config from './config'
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import {messageInBackground} from './background/index'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // "connect.sid=s%3AVNjQ6khdCjfSuX2z4c2MoTHAhEqELvrB.BjJmLl3rp2FzpsOaBeJ5oz3La3oKt9RWaNvDYlPDRkE"
  

  const getUser = () => {
    axios
      .get(`${config.API_URL}/user`, { withCredentials: true })
      .then((res) => {
        console.log(res.data)
        console.log("boob")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(()=>{
    // if(localStorage.getItem('user')){
    //   setIsAuthenticated(true)
    // }
    // console.log(localStorage.getItem('user'))
    // console.log(window.cookie)
    getUser()
  }, [])

  console.log("fart")

  // document.addEventListener("mouseup", function (event) {
  //   let select = window.getSelection().toString();
  
  //   console.log(select)
  // });
  return (
    <>
        <Header />
        <hr></hr>
        <Form isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
    </>
  );
}

export default App;
