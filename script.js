// LOGIN BUTTON CLICK EVENT
document.getElementById('loginBtn').addEventListener('click', () => {

  // Trigger Facebook login popup
  FB.login(response => {

    // Check if user successfully authenticated
    if (response.authResponse) {
      fetchUserData();
    }

  }, {
    // Request basic permissions
    scope: 'public_profile,email'
  });
});


// FETCH USER PROFILE DATA FROM FACEBOOK
function fetchUserData() {

  // Request user info from Facebook Graph API
  FB.api('/me', { fields: 'name,email,picture.width(200)' }, user => {

    // Hide login UI
    document.getElementById('loginBtn').style.display = 'none';
    document.querySelector('.hint').style.display = 'none';

    // Show profile section
    document.getElementById('profile').classList.remove('hidden');

    // Insert user data into UI
    document.getElementById('name').textContent = user.name;
    document.getElementById('email').textContent =
      user.email || 'No email available';
    document.getElementById('profilePic').src = user.picture.data.url;
  });
}


// LOGOUT BUTTON CLICK EVENT
document.getElementById('logoutBtn').addEventListener('click', () => {

  // Log out from Facebook session
  FB.logout(() => {

    // Reload page to reset UI
    location.reload();
  });
});
