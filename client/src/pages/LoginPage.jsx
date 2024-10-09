import React, {useState} from "react"
import axios from "axios";

const LoginPage = () => {
    const SERVER_URL =  'http://localhost:4000';
    const logininfo = {
        id: '',
        password: ''
    };

    const [userData, setUserData] = useState(logininfo);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.id]: e.target.value
        });
    }

    const postLogin = async (e) => {
        e.preventDefault();
        try{
             const response = await axios.post(`${SERVER_URL}/login`,userData);
             console.log(response.status);
        }catch(err){
             console.log(err.response.data.message)
        }
    }

    return(
        <form onSubmit={postLogin}>
            <input 
            id="id" 
            placeholder="id"
            onChange = {handleChange}/>

            <input 
            password="password" 
            placeholder="password"
            onChange = {handleChange}/>
            <button>로그인</button>
        </form>
    )
}

export default LoginPage;