import React ,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState({name:"",email:"",password:""});
    function handleInput(event){
        const {name,value} = event.target;
        setUser({...user,[name]:value});
    }
    const sendData = async(e)=>{
        e.preventDefault();
        const {name,email,password}=user;
        const res = await fetch("/signup",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email,password
            })
        });
        if(res.status===400 || !res){
            //--todo--
        }
        else{
            navigate("/login");
            setUser({...user,email:"",name:"",password:""});
        }
    }
    return (
        <div className='container-main'>
            <form className='login-box p-5'>
                <h4 className='text-center'>Create Account</h4>
                <br />
                <div className='mb-3'>
                    <label htmlFor='exampleFormControlInput1' className='form-label'>
                        Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='exampleFormControlInput1'
                        placeholder='Aniket Raj Singh'
                        name='name'
                        value={user.name}
                        onChange={handleInput}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='exampleFormControlInput2' className='form-label'>
                        Email
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleFormControlInput2'
                        placeholder='name@example.com'
                        name='email'
                        value={user.email}
                        onChange={handleInput}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='exampleFormControlInput3' className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleFormControlInput3'
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
                <button className='btn w-100 btn-blue' onClick={sendData}>Sign Up</button>
                <br />
                <br />
                <p className='text-center'>
                    Already have an account?{' '}
                    <Link to='/login' className='link-to'>
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Signup
