import React, {useState} from "react"
import axios from "axios";

const LoginPage = () => {
    const SERVER_URL =  'http://localhost:4000';
    const logininfo = {
        id: '',
        password: ''
    };

    const [userData, setuserData] = useState(logininfo);
    

    return(
        <form onSubmit>
            <input id="id" placeholder="id"/>
            <input password="password" placeholder="password"/>
        </form>
    )
}