let userPoints = 0;
let streak = 0;
//const badges = ["/images/badge1.jpg", "/images/badge2.jpg", "/images/badge3.jpg"]; // Add actual badge image URLs

function updateUserInfo() {
    document.getElementById('user-points').textContent = userPoints;
    document.getElementById('streak').textContent = streak;

    const badgeContainer = document.getElementById('badge-container');
    badgeContainer.innerHTML = "";
    
    badges.forEach(badge => {
        const badgeElement = document.createElement('div');
        badgeElement.classList.add('badge');
        badgeElement.style.backgroundImage = `url(${badge})`;
        badgeContainer.appendChild(badgeElement);
    });
}

// Simulating user data update
function simulateDataUpdate() {
    userPoints = 150;
    streak = 5;
    updateUserInfo();
}

// document.addEventListener('DOMContentLoaded', function () {
//     // Dummy data for badges (you can replace it with dynamic data)
//     const badgeData = ['🥇', '🥈', '🥉', '🎉', '🌟', '🏆'];

//     const badgeContainer = document.querySelector('.badge-container');

//     // Add badges dynamically
//     badgeData.forEach(badge => {
//         const badgeElement = document.createElement('div');
//         badgeElement.classList.add('badge');
//         badgeElement.innerHTML = badge;
//         badgeContainer.appendChild(badgeElement);
//     });
// });

// You might want to call a function like simulateDataUpdate after fetching user data.
// For simplicity, it's called directly here.
simulateDataUpdate();
