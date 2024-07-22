import React, { useState } from "react";
import { toast } from 'react-toastify';

const Forgetpass = () => {

    const [email, setEmail] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [showRole, setShowRole] = useState(false);


    const validateForm = () => {
        if (!email) {
            toast.error("Email is required");
            return false;
        }
        if (!newpassword) {
            toast.error("New-Password is required");
            return false;
        }
        if (!confirmpassword) {
            toast.error("Confirm-Password is required");
            return false;
        }
        return true;
    };

    const toggleShowRole = () => {
        setShowRole(!showRole);
    }

    const forgetpass = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            let result = await fetch("https://www.api.jigsawplanet.online/forgetpassword", {
                method: "post",
                body: JSON.stringify({ email, newpassword, confirmpassword }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await result.json();

            if (result.ok) {
                toast.success("User Password Reset Successfully..!!");
            } else {
                toast.error("User Email or lPassword Don't Match..!!");
            }
        } catch (error) {
            console.error("Error during Changing Role:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div>
            <h2 className='text-primary text-center text-bolder my-4'>ForGet Password</h2>
            <div id="main-wrapper" className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className="row no-gutters">
                                    <div className="col-lg-6">
                                        <div className="p-5 bgLeftSide">
                                            <div className="mb-5">
                                                <h3 className="h4 font-weight-bold text-theme">Forget Passsword</h3>
                                            </div>
                                            <form encType="multipart/form-data" onSubmit={forgetpass}>
                                                <div className="form-group mb-3">
                                                    <label htmlFor="yourName">User Email</label>
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="form-control"
                                                        id="yourEmail"
                                                        placeholder="User Email"
                                                    />
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="exampleInputPassword1">New Password</label>
                                                    <input
                                                        type={showRole ? "text" : "password"}
                                                        name="password"
                                                        value={newpassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="User Passsword"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary mt-3 text-align "
                                                        onClick={toggleShowRole}
                                                    >
                                                        {showRole ? "Hide" : "Show"}
                                                    </button>

                                                </div>
                                                <div className="form-group mb-2">
                                                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                                                    <input
                                                        type={showRole ? "text" : "password"}
                                                        name="password"
                                                        value={confirmpassword}
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="User Passsword"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-secondary mt-3 text-align "
                                                        onClick={toggleShowRole}
                                                    >
                                                        {showRole ? "Hide" : "Show"}
                                                    </button>

                                                </div>

                                                <button type="submit" className="col-lg-6 btn btn-dark">ForGet Passsword</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-none d-lg-inline-block">
                                        <div className="account-block rounded-right">
                                            <div className="overlay customBackground rounded-right" />
                                            <div className="account-testimonial">
                                                <img src='./images/Puzzlle.jpeg' className="middle-img" width={350} height={250} alt="Register" />
                                                <h4 className="text-white my-4">This Awesome Game is yours!</h4>
                                                <p>- Admin User</p>
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
}

export default Forgetpass;




// <div className="my-4">
//             <div className="container mt-4 w-50">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8">
//                         <div className="card-group mb-0">
//                             <div className="card p-4">
//                                 <div className="card-body">
//                                     <h3>Change Rule</h3>
//                                     <div className="input-group mb-3">
//                                         <span className="input-group-addon"><i className="fa fa-user" /></span>
//                                         <input
//                                             type="email"
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             name="email"
//                                             className="form-control"
//                                             placeholder="User email"
//                                         />
//                                     </div>
//                                     <div className="input-group mb-4">
//                                         <span className="input-group-addon"><i className="fa fa-lock" /></span>
//                                         <input
//                                             type={showRole ? "text" : "password"}
//                                             onChange={(e) => setNewPassword(e.target.value)}
//                                             name="password"
//                                             className="form-control"
//                                             placeholder="New Password"
//                                         />
//                                         <button
//                                             type="button"
//                                             className="btn btn-outline-secondary"
//                                             onClick={toggleShowRole}
//                                         >
//                                             {showRole ? "Hide" : "Show"}
//                                         </button>
//                                     </div>
//                                     <div className="input-group mb-4">
//                                         <span className="input-group-addon"><i className="fa fa-lock" /></span>
//                                         <input
//                                             type={showRole ? "text" : "password"}
//                                             onChange={(e) => setConfirmPassword(e.target.value)}
//                                             name="password"
//                                             className="form-control"
//                                             placeholder="Confirm New Password"
//                                         />
//                                         <button
//                                             type="button"
//                                             className="btn btn-outline-secondary"
//                                             onClick={toggleShowRole}
//                                         >
//                                             {showRole ? "Hide" : "Show"}
//                                         </button>
//                                     </div>
//                                     <div className="row">
//                                         <div className="col-6">
//                                             <button
//                                                 onClick={forgetpass}
//                                                 type="button"
//                                                 className="btn btn-primary"
//                                             >
//                                                 Change Password
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>