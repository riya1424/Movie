import { React, useState , useEffect} from "react";
import {useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    let navigate = useNavigate();
    let[state,setState] = useState({
        username : "",password : "",
    })

    const register = () => {
        navigate("/register");
    }

    const getInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setState({
            ...state,[name] : value,
        })    
    }

    useEffect(()=>{
        let data = sessionStorage.getItem("username");
        console.log(data);
        if(data == null){
            navigate("/login");
        }
    })

    const submitData = (e) => {
        e.preventDefault();
        console.log(state);
        if(validate()){
            fetch("http://localhost:3001/users?username="+state.username)
            .then(async (res)=>{
                let record = await res.json();
                if(record.length == 1){
                    console.log("login successful");
                    toast("Username exists.")
                    if(record[0].password == state.password){
                        toast.success("password matched..")
                        sessionStorage.setItem("username" , record[0].username);
                        navigate("/add_movie");
                    }
                    else{
                        toast.warning("wrong password..")
                    }
                }
                else{
                    toast.error("username doesn't exists.")
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    const validate=()=>{
        if(state.username == ""){
            toast.warning("Email Required..");
            return false;
        }
        else if(state.password == ""){
            toast.warning("Password Required..");
            return false;
        }
        else{
            return true;    
        }
    }

    return (
        <>
            {/* login page  */}
            <div className="container py">
                <h2 className="text-center fw-bold py-4">Login</h2>
                <div className="d-flex justify-content-center">
                    <form method="post" onSubmit={(e)=>submitData(e)}>
                        <div className="row py-3">
                            <div className="col-md-12 form-group my-3">
                                <label className="ms-3"><b>Username</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="text" name="username" onChange={(e)=>getInput(e)} id="title" placeholder="enter username" />
                            </div>
                            <div className="col-md-12 form-group">
                                <label className="ms-3"><b>Password</b></label>
                                <input className="form-control my-2 p-3 rounded-pill" type="password" name="password" onChange={(e)=>getInput(e)} id="title" placeholder="enter password" />
                            </div>
                        </div>
                        <div className="text-center my-3">
                            <div className="d-flex align-items-center justify-content-center">
                            <button className="btn btn-outline-dark w-100 p-3 fw-semibold rounded-pill">LOGIN</button>
                            <p className="mx-3 my-3 fs-6 text-decoration-underline fw-bold">or</p>
                            <button onClick={register} className="btn btn-outline-dark w-100 p-3 fw-semibold rounded-pill">REGISTER</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Login;