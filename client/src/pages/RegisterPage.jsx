import React, {useState} from "react";
import axios from "axios";

const RegisterPage = () => {
    const SERVER_URL =  'http://localhost:4000';

    const loginInfo = {
        id : '',
        email : '',
        password: ''
    };

    const [userData, setUserData] =  useState(loginInfo);

    const handleChange = (e) => {
        setUserData({
            ...userData,  
            [e.target.id]: e.target.value 
        });
    }
    
    const postSign = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${SERVER_URL}/users`,userData);
            console.log(response.status);      // 회원가입 성공 시 http 상태 코드만 보내줌
        }catch(err){
            console.log(err.response.data.message)   // 백엔드에서 회원가입 실패 원인을 알려줌
        }
    }

    return(
        <form onSubmit={postSign}>
           <input 
             id="id"
             placeholder="아이디"
             onChange={handleChange}
           />
           <input 
             id="email"
             placeholder="이메일"
             onChange={handleChange}
           />
            <input 
             id="password"
             placeholder="비밀번호"
             onChange={handleChange}
           />
           <button>회원가입</button>
        </form>  
    );

}



export default RegisterPage