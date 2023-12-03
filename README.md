# 260StartUp
### Most recent edits
- Backend set up to handle websocket with song changes
- frontend js page connects to websocket and sets up connect
- song name and person who edited sent over the connection
- most recent song edited and who edited it displayed at bottom of song page (under edit button)
## Project Idea
Want to choreograph your favorite songs with others? This new website will allow you to look through songs and create your own dances to go along with others! You can also see edits from others and it will save your choreographies. It also keeps track of the number of contributions you make and will let you know when someone else makes an edit on a song!
## Key Features
- Collaboration with others
- Keep track of edits
- Choose from variety of songs
- Seperate editing page, login page, and search songs page
- Lit up star on songs that you contributed to
## How Technology is Used
HTML will be used to create the basic layout of the pages, CSS will style and add glowing star when contribution is made. JavaScript will be used to switch pages with buttons, take inputs from users and save it. The Web Server will help with calls like saving the information that is input and with finding user information when logging in. A login screen will show up first and allow a user to have an account connected to their information, the Database will store username/password pairs and the information associated with the users. WebSocket will be used to send a message to everyone when a user makes and saves an edit and React will deal with routing to different urls based on a user's actions and what they click.
## Website Layout
### Login Page

<img width="391" alt="Login Page" src="https://github.com/MysticKim3/260StartUp/assets/83422570/901c5a7e-0b67-475e-ac70-c49cd99dbc32">

### Listed Dances Page

<img width="389" alt="Updated Dance Screen" src="https://github.com/MysticKim3/260StartUp/assets/83422570/0d0a9e09-95ff-46ae-a23f-d894f9b99d1c">

### Dance Editing Screen

<img width="644" alt="Edit Song page" src="https://github.com/MysticKim3/260StartUp/assets/83422570/d7aa7f40-d366-4b18-b686-eacce454b164">

## Updates
### Html Updates
- Wrote html for the three pages
- Added login button that transfers to dance screen
- Go to song changes from dance to song screen
- Hardcoded text on song screen/dance screen where generated/saved/realtime data would go
- Image on login screen
### CSS Updates
- Created a header that will condense into a bar that can open to display movement options
- Created a footer that will change size based on screen size
- Added flex elements in main to format sections on the screens
- Kept all content but reformatted it to make it easier to navigate
### JavaScript Updates
- Saved login in local storage
- Show username on dance/song pages
- Saves your choreography for songs in local storage
- Clicking go to song opens up page with lyrics for specific song
- Can click to other choreo by tapping arrows, tapping on the box will add it to your choreography if you click the arrow to go back again (Must save edits or it disappears on refresh)
- Saves number of times you save edits (number of contributions)
- Contributions on songs is randomly generated number
- Updated side bar to have song names assigned from in the song list (Under contribution count)
### Service Updates
- Added node and express to the project (reorganized files)
- calls third party service to generate random picture on the login page
- http services with /api/edit and /api/edits to get and save when someone makes an edit
- frontend calls edit services, backend provides services
- edit services can be seen if edits are saved in a song, it will appear as commentary on the dances screen which will fill up as saves are made.
### MongoDB Updates
- Created MongoDB Atlas Database
- Still has the backend endpoints for keeping track of when edits are made
- Names/songs that have been edited are stored in the database for display on the side of songlist page
### Login Updates
- Login page now offers creating user or login to existing and stores the users in the database
- Encodes passwords in database
- If logged in, will show different buttons on home page to "play" or go make dances, or logout (application functionality affected by authentication)
### Websocket Updates
- Backend set up to handle websocket with song changes
- frontend js page connects to websocket and sets up connect
- song name and person who edited sent over the connection
- most recent song edited and who edited it displayed at bottom of song page (under edit button)
