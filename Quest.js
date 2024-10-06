import React, { useState, useEffect } from 'react';

function Quests() {
    const [quests, setQuests] = useState([]);

    useEffect(() => {
        fetch('/api/quests')
            .then((res) => res.json())
            .then((data) => setQuests(data));
    }, []);

    const completeQuest = (quest) => {
        alert(`You have completed the quest: ${quest.title} and earned ${quest.xpReward} XP!`);
    };

    return (
        <div className="quests">
            <h2>Available Quests</h2>
            {quests.map((quest, index) => (
                <div className="quest" key={index}>
                    <h3>{quest.title}</h3>
                    <p>XP Reward: {quest.xpReward}</p>
                    <button onClick={() => completeQuest(quest)}>Complete Quest</button>
                </div>
            ))}
        </div>
    );
}

export default Quests;
