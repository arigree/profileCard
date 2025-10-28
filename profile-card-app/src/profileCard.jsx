import React from 'react';
import './profileCard.css';

function ProfileCard(){
    return (

        <div className="profile-card">
            <img src="https://img.freepik.com/free-photo/happy-young-man-laughing_23-2148911860.jpg?semt=ais_hybrid&w=740&q=80" alt="Profile" className="profile-image"/>
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-bio">I am John Doe, I am a entrepreneur and artist.</p>
            <h3 className="profile-favorites-title">My Favorite Things:</h3>
            <ul className="profile-favorites">
                <li>Long walks on the beach</li>
                <li>Reading</li>
                <li>Traveling</li>
            </ul>
        </div>
    )
}
export default ProfileCard;