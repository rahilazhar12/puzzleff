import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword ] = useState('');


    const navigate = useNavigate();

    const validateForm = () => {
        if (!email) {
            toast.error("Email is required");
            return false;
        }
        if (!password) {
            toast.error("Name is required");
            return false;
        }
        
        return true;
    };

    const loginUser = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
                 
        let result = await fetch("http://localhost:7100/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
            "Content-Type": "application/json"
            }
            
        });
        
        const data = await result.json();
                
        if (result.ok) {
            localStorage.setItem('key', JSON.stringify(data.user));
            navigate("/");
            toast.success("User Login Successfully..!!");
        } else {
            toast.error("User Email or Password do not match..!!");
            }
        }

    return (
        <div className="mb-5">
        <h2 className='text-primary text-center text-bolder my-4'>Login Form</h2>
        <div id="main-wrapper" className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="card border-0">
                <div className="card-body p-0">
                  <div className="row no-gutters">
                    <div className="col-lg-6">
                      <div className="p-5 bgLeftSide">
                        <div className="mb-5">
                          <h3 className="h4 font-weight-bold text-theme">Login</h3>
                        </div>
                        <h6 className="h5 mb-0">Log-In to your account.</h6>
                        <p className="text-muted mt-2 mb-5">If You Really Want To Know, Look In The Login.</p>
                        <form encType="multipart/form-data" onSubmit={loginUser}>
                          <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="form-control"
                              id="exampleInputEmail1"
                              placeholder="User Email"
                            />
                          </div>
                          <div className="form-group mb-5">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="form-control"
                              id="exampleInputPassword1"
                              placeholder="User Password"
                            />
                          </div> 
                          <div>
                          <button type="submit" className="col-lg-6 btn btn-dark">Login</button>
                          <br></br>
                          <Link to="/forget" className="btn text-body">Forgot password?</Link>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-inline-block">
                      <div className="account-block rounded-right">
                        <div className="overlay customBackground rounded-right" />
                        <div className="account-testimonial">
                          <img src='./images/Puzzlle.jpeg' className="middle-img" width={200} height={200} alt="Register" />
                          <h4 className="text-white my-4">Just One Step left to Play Awesome Game</h4>
                          <p>- Login User :) </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end card-body */}
              </div>
              {/* end card */}
              {/* end row */}
            </div>
            {/* end col */}
          </div>
          {/* Row */}
        </div>
      </div>
    );
};

export default Login;

























// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";


// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const loginUser = async (e) => {
//         e.preventDefault();
//         let result = await fetch("http://localhost:7100/login", {
//             method: "post",
//             body: JSON.stringify({ email, password }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await result.json();
        
//         if (result.ok) {
//             localStorage.setItem('key', JSON.stringify(data.user));
//             navigate("/");
//             toast.success("User Login Successfully..!!");
//         } else {
//             toast.error("User Email or Password do not match..!!");
//         }
//     }

//     return (
//         <div className="card1">
//             <section className="vh-100">
//                 <div className="container-fluid h-custom">
//                     <div className="row d-flex justify-content-center align-items-center h-100">
//                         <div className="col-md-9 col-lg-6 col-xl-5">
//                             <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="images" />
//                         </div>
//                         <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//                             <form onSubmit={loginUser}>
//                                 {/* Email input */}
//                                 <div className="form-outline mb-4">
//                                     <label className="form-label" htmlFor="form3Example3">Email address</label>
//                                     <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control form-control-lg" placeholder="Enter a valid email address" required />
//                                 </div>

//                                 {/* Password input */}
//                                 <div className="form-outline mb-3">
//                                     <label className="form-label" htmlFor="form3Example4">Password</label>
//                                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control form-control-lg" placeholder="Enter password" required />
//                                 </div>

//                                 <div className="d-flex justify-content-between align-items-center">
//                                     {/* Checkbox */}
//                                     <div className="form-check mb-0">
//                                         <input className="form-check-input me-2" type="checkbox" id="form2Example3" />
//                                         <label className="form-check-label" htmlFor="form2Example3">
//                                             Remember me
//                                         </label>
//                                     </div>
//                                     <Link to="/forget" className="text-body">Forgot password?</Link>
//                                 </div>

//                                 <div className="text-center text-lg-start mt-4 pt-2">
//                                     <button type="submit" className="btn btn-primary btn-lg" style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>Login</button>
//                                     <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/register" className="link-danger">Register</Link></p>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Login;