import React, {useState} from "react";
import Input from "components/users/Input";
import UserForm from "components/users/UserForm";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa"
import { IoIosMail } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegisterPage = () =>{
    const SERVER_URL = "http://localhost:4000";   // 서버 주소
    const [id, setID] = useState("");
    const [mail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ckPassword, setCkPassword] = useState("");
    const passwordMatch = password === ckPassword;
    const navigate = useNavigate();

    const formData = {
        bt_msg: "Already have an account?",
        bt_link: "/login",
        bt_button: "Login",
        fr_title: "CREATE YOUR ACCOUNT",
        fr_msg: "",
        inputs : [
            <Input 
                id="id" 
                placeholder="Enter Username"
                setState={setID}
                icon={<FaUser/>}
                key="id"
            />,
            <Input 
            id="email" 
            placeholder="Enter EMail"
            setState={setEmail}
            icon={<IoIosMail/>}
            key="email"
            />,
            <Input 
            id="password" 
            placeholder="Enter Password"
            setState={setPassword}
            icon={<FaLock />}
            key="password"
            />,
            <Input 
            id="confirmPassword"
            placeholder="Enter ConfirmPassword"
            setState={setCkPassword}
            icon={<FaRegCheckCircle/>}
            key="confirmPassword"
            />
        ],
        submit: "Register",
      };

     const postRegister = async () => {
        if (!passwordMatch) {
            alert("비밀번호가 일치하지 않습니다.");
            setCkPassword("");
        }
        
        else {
            try{
                const response = await axios.post(`${SERVER_URL}/users`, {
                    id : 'admin',
                    email : 'admin@email.com',
                    password : '1234'
                });
    
                if(response.status ===  201){
                    navigate("/login");
                }
            }catch(err){
                if(response.status === 409){
                    console.log("이미 존재하는 아이디입니다.");
                }

                else(response.status === 400){
                    console.log("회원가입에 실패하였습니다.")
                }
               
            };
        };
    };

    return(
        <UserForm formData={formData} handleSubmit={postRegister}/>
    );
};

export default RegisterPage;
