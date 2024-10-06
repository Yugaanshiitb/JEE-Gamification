import React from 'react';

function Leaderboard() {
    const players = [
        { name: 'JEE Warrior', xp: 200 },
        { name: 'Physics Pro', xp: 180 },
        { name: 'Chem Master', xp: 150 },
    ];

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>XP</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.xp}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Leaderboard;
