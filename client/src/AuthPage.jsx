import axios from 'axios';
import React, { useState } from 'react';

const AuthPage = (props) => {
    const [username, setUsername] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/authenticate', { username });
            props.onAuth({ ...response.data, secret: username });
        } catch (error) {
            console.error("error", error);
            
        }
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">Welcome To ChatApp</div>

                <div className="form-subtitle">Set a username to get started</div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input
                        className="auth-input"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;
