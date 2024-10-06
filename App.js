import React, { useState, useEffect } from 'react';
import './styles/app.css';
import Dashboard from './components/Dashboard';
import Quests from './components/Quests';
import Leaderboard from './components/Leaderboard';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate user fetch
        const loggedInUser = {
            username: 'JEE Warrior',
            xp: 200,
            level: 5,
        };
        setUser(loggedInUser);
    }, []);

    return (
        <div className="app">
            <header>
                <h1>JEE Quest - Level Up Your Prep!</h1>
            </header>

            {user ? (
                <div className="main-content">
                    <Dashboard user={user} />
                    <Quests user={user} />
                    <Leaderboard />
                </div>
            ) : (
                <div>Please login to access your dashboard</div>
            )}
        </div>
    );
}

export default App;
