# Account Access System (Facebook Login)

A secure authentication system that allows users to log in using their Facebook account and view their profile information.

## Features

- **Facebook OAuth Authentication**: Secure login using Facebook credentials
- **Profile Display**: Shows user's name, email, and profile picture after login
- **Logout Functionality**: Secure logout with session clearing
- **Modern UI**: Clean and professional authentication interface
- **Responsive Design**: Works seamlessly across different device sizes

## Setup Instructions

1. Open `index.html` in a web browser
2. Click **Login with Facebook**
3. You'll be redirected to Facebook to authorize the application
4. After authorization, your profile information will be displayed
5. Click **Logout** to sign out and return to the login screen

## Configuration

The application uses the Facebook SDK with the following App ID:

- App ID: `1068641812009549`
- API Version: `v19.0`
- Permissions: `public_profile`, `email`

To use your own Facebook App, update the App ID in `script.js`:

```javascript
FB.init({
  appId: "YOUR_APP_ID",
  // ... other settings
});
```

## Files

- `index.html` - HTML structure with login and profile sections
- `script.js` - Facebook SDK integration and authentication logic
- `style.css` - Styling for the login interface

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Facebook SDK v19.0

## Requirements

- Active internet connection
- Valid Facebook account
- Browser with JavaScript enabled
