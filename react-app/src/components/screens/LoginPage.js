import React, { useState, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { userContext } from '../../App';
import { toast } from 'react-toastify';
import companyLogo from '../../assets/images/deutsche-bank-logo.png'
import '../screens/LandingPage.css';
import { login } from '../../services/userServices';

export default function SignInPage() {
    const { state, dispatch } = useContext(userContext);
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await login({
                email,
                password,
            });

            console.log("Response to login: ", res);
            toast.success("Login Success :)");
            console.log(res.data);

            // set the data of user in store
            dispatch({
                type: "LOGIN_USER",
                payload: res.data.user,
            })


        //set the jwt and user DAte in local Storage
        localStorage.setItem("jwt", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));


        history.push('/');

    } catch (error) {
        console.log("Error:" + error);
        toast.error("Error Try Again.");
        history.push('/login');
    }
}

return (
    <>
        <div id="forLandingPage" >
            <div className="text-center m-5-auto">
                <form onSubmit={handleSubmit} className="mt-3">
                    <div className="logo"><img src={companyLogo} alt="DB logo" /></div>
                    <div className="form-group mb-3">
                        <label className="form-label">User Name</label>
                        <input
                            className="form-control"
                            placeholder="Enter UserName"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label className="form-lab el">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button disabled={!email || !password} className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div >
        </div>
    </>
)
}
