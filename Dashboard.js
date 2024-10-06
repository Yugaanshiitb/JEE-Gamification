import React from 'react';

function Dashboard({ user }) {
    return (
        <div className="dashboard">
            <h2>Welcome, {user.username}</h2>
            <p>XP: {user.xp}</p>
            <p>Level: {user.level}</p>

            <div className="progress-section">
                <h3>Your Progress:</h3>
                <div className="progress-bar">
                    <div style={{ width: `${(user.xp / 500) * 100}%` }} className="progress-fill"></div>
                </div>
                <p>Next Level: {500 - user.xp} XP to go</p>
            </div>
        </div>
    );
}

export default Dashboard;
