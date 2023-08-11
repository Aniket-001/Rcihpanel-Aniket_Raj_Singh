import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'


const Login = () => {
    const  navigate = useNavigate();

    const [user, setUser] = useState({ email: "", password: "" });
    //controlled state for input
    function handleInput(event) {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }
    //
    const submitData = async (e) => {
        e.preventDefault();
        const {email,password} = user;
        const res = await fetch('/login', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.status === 400 || !res) {
            //--todo

        }
        else {
            navigate('/');
            setUser({ ...user, email: "", password: "" });
        }
    }
    return (
        <div className='container-main'>
            <form className='login-box p-5'>
                <h4 className='text-center'>Login to your account</h4>
                <br />
                <div className='mb-3'>
                    <label htmlFor='exampleFormControlInput1' className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='name@example.com'
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='inputPassword' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='inputPassword'
                        placeholder='Password'
                        name='password'
                        value={user.password}
                        onChange={handleInput}
                    />
                </div>
                <div className='col-12'>
                    <div className='form-check'>
                        <input
                            className='form-check-input'
                            type='checkbox'
                            value=''
                            id='invalidCheck'
                            required
                        />
                        <label className='form-check-label' htmlFor='invalidCheck'>
                            Remember Me
                        </label>
                    </div>
                </div>
                <br />
                <button className='btn w-100 btn-blue' onClick={submitData}>Login</button>
                <br />
                <br />
                <p className='text-center'>
                    New to MyApp?{' '}
                    <Link to='/signup' className='link-to'>
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Login
