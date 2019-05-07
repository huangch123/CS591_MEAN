HW 5

Changes from HW4:

In Angular:
Added a button to src/app/profile/profile.component.html
- Clicking the button redirects to the Google OAuth login which is implemented in the back end


In the Node:Express:
Added db and db/user.js
Added routes/auth.js
- Contains Google authentication and callback
Changed app.js to allow for OAuth login with Google and mongoDB access using mongoose
- A Google API clientID and clientSecret will be needed in order to access the login page
- Your Google API's credentials' authorized redirect URIs must also include http://localhost:4200/profile and http://localhost:4200
- Implemented both passport.serializeUser and passport.deserializeUser, which places on the 'user' object the profile's id and name
