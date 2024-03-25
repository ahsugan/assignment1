import React, { FunctionComponent } from "react"
import { useNavigate } from "react-router-dom"
import './Login.css'
const Login: FunctionComponent = () => {
    const navigate = useNavigate()
    /** Navigate to dashboard */
    const SignIn = () => {
        navigate('./dashboard')
    }
    return (
        <div id="login_backPanel" style={{ borderRadius: '5px', width: '300px', height: '300px', border: '1px solid wheat' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                <h6>Sign In</h6>
                <br />
                <div>
                    <div className="row">
                        <div className="col-3">
                            <h6>Email</h6>
                        </div>
                        <div className="col-4">
                            <input type="email" />
                        </div>
                    </div>
                    <br />


                    <div className="row">
                        <div className="col-3">
                            <h6 className="col-4">Password</h6>
                        </div>
                        <div className="col-4">
                            <input type="password" />
                        </div>
                    </div>
                </div>
                <br />
                <button id="login_button" onClick={() => SignIn()}>Login</button>
            </div>
            <br />
            <br />


        </div>

    )

}

export default Login;