import axios from 'axios';
import joi from 'joi';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import LoadPage from './../LoadPage/LoadPage';
import { Helmet } from 'react-helmet';

export default function Login({saveUserData}) {
  const [errorList, setErrorList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorApi, setErrorApi] = useState(null)
  let navigate = useNavigate();

  const [user, setUser] = useState({
    email :"",
    password :""
      }
    )
    
    function loginUser (e){
    setErrorList(null)

      let newUser = {...user};
      newUser[e.target.id] = e.target.value;
      setUser(newUser)
    }
    function submitUser (e){
      setIsLoading(true);

      e.preventDefault();
      let validation = validateUserForm()
      if(validation.error){
        setIsLoading(false);

      setErrorList(validation.error.details)
      }else{
        sendUserApi();
      setErrorList([])
      }

 }

    function validateUserForm(){
      let schema = joi.object({
        email :joi.string().email({tlds:{allow:['com','net']}}).required(),
        password :joi.string().pattern(/^[a-z]{3,10}/i).required()
        });
        return schema.validate( user , {abortEarly:false})
    }
    async function sendUserApi(){
      let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/Signin`,user)
      if(data.message === "success"){
        setIsLoading(false);
        localStorage.setItem('userToken',data.token)
      saveUserData();
      navigate("/home");
      }else{
        setIsLoading(false)
        setErrorApi(data.message)
      }
    
    }
    useEffect(() => {
      
      document.querySelector('.showPass').addEventListener('mousedown',function(e){
          e.target.previousElementSibling.type='text'
          e.target.classList.replace('fa-eye-slash',"fa-eye")        
      })
      document.querySelector('.showPass').addEventListener('mouseup',function(e){
          e.target.previousElementSibling.type='password'
          e.target.classList.replace('fa-eye',"fa-eye-slash")
      })

    
      return () => {
        
      }
    }, []);
    function showError (key){
      if(errorList){
        for (let i = 0; i < errorList.length; i++) {

          if(errorList[i].context.label === key){
            return errorList[i].message;
          }
          
        }
        return"";
      }
      
     
    }
    


  return <>{isLoading?<LoadPage/>:<>
   <Helmet>
  <meta name="description" content={`Login Page`}/>
    <meta name="keywords" content="Games PC  Browser   "/>
    <title>Login</title>
  </Helmet>
  
  <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0 align-items-center bg-dark">
            <div className="col-xl-6 d-none d-xl-block  ">
              <img src={(require("./../../Imgs/joinfree.jpg"))}
                alt="JionPic" className="img-fluid" />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-center">
                <h3 className="mb-3 text-white-50 text-uppercase">Login</h3>

              <form onSubmit={submitUser}>
              

                <div className="form-outline mb-4">
                  <input onChange={loginUser} placeholder='E-Mail' type="email" id="email" className="form-control text-white bg-transparent " />
                  {showError("email")?<h6 className='alert alert-warning text-start ps-3 p-0 mt-2'>{showError("email")}</h6>:""}                    

                </div>

                <div className="form-outline mb-4">
                  <div className="position-relative">

                  <input onChange={loginUser} placeholder='Password' type="password" id="password" className="form-control text-white bg-transparent " />
                  <i className="fa-solid text-primary text-opacity-75 showPass fa-xl fa-eye-slash cursorPointer position-absolute end-0 top-50 translate-middle-y me-3"></i>

                  </div>
                  {showError("password")?<h6 className='alert alert-warning text-start ps-3 p-0 mt-2'>Password Must Be From 3 to 8 Charcters </h6>:""}                    

                </div>

              

                <div className="pt-3">
                {errorApi?<div className='alert  alert-danger'>{errorApi}</div>:"" }
                  <button type="submit" className="btn btn-outline-primary  btn-lg w-100">Login</button>
                </div>
              </form>

                <hr/>
                <p className='text-primary cursorPointer'>Forgot Password?</p>
                <p className='text-white-50'>Not a member yet? <Link to={"/login"} className='ps-2 text-primary '>Create Account</Link> </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
  </>}
  
  
  
  </>
}
