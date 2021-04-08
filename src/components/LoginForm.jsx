import { useState } from "react";
import axios from 'axios';

const projectID = '58dd51d0-2ce9-4f34-88d4-d3134a8b5592';

const Modal = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password};

        try {
            //username | password => chatering -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers:authObject});
            
            //works out -> logged in
            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
            setError('');
        } catch (error) {
            //error -> try with new username...
            setError('Oops, credenciales incorrectas');
        }
    };
    
    return ( 
        <div className="wrapper">
            <div className="form">
                <h1 className="title">TYT Chat</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}
 
export default Modal;