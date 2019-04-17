The Angular folder contains the code Angular code for the front end.
It is hosted on http://localhost:4200/.
Due to the loading time, you may have to refresh the page.
The Angular part of my code creates a default profile for the user.
The user may change their name and location.
It also attempts to obtain weather related information from the Node portion, but since the API requires a key, no information can be obtained.

The Node portion is pretty much the same as my HW3, but I added cors as a middleware in order to allow my Angular code to access the data, which can be obtained with full access to the API that I used.
