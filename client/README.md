# Doug's Quiz City

## A fun quiz app created for Tandem's Apprentice Software Engineer Program!

### Live @ [dougtv.herokuapp.com](https://dougtv.herokuapp.com/)

[![Heroku](https://heroku-badge.herokuapp.com/?app=dougtv)](https://dougtv.herokuapp.com/)

**Doug's Quiz City** is a One-To-Many Video Broadcast Full-Stack Web App that allows users to quickly launch a live broadcast video stream and be publicly seen and heard by an audience anywhere in the world!

Built with React.js with Hooks, and styled with CSS.

![DougTV Site Walkthrough](https://dougtv.herokuapp.com/DougTV.gif)

## Features

Users are able to:

* Start a new quiz by clicking the 'START' button
* Quiz features 21 randomized multiple choice questions
  * All multiple choices are additionally randomized - so no two games are the same!
* Display showcases how many questions remain in the quiz
* Player's score is immediately updated when a correct answer is selected
* After selection, the correct answer is highlighted in green
* If the wrong answer is selected, it is highlighted in red
* A hover effect was added to help players know which multiple choice their mouse is over

## Future Features

* Sitewide Accessability Enhancements: I would love to add the ability to make selections using a keyboard or non-mouse input, and further aids for the visually impaired 
* The implementation of a back-end server and database to allow users to create simple player accounts, keep track of their history, and monitor a leaderboard of high scores
* 

## Technical Milestones

* This Full Stack Web App was created as both a tech demo and steppingstone in learning and utilizing WebRTC to launch a one-to-many Video Broadcast
* Lessons learned in creating DougTV were used in the creation of my award winning Pursuit 2020 Capstone Project, [Pantry Party](https://www.pantry-party.com/)
* Understanding what the RTCPeerConnection is and how it can be properly shared behind NAT Servers
* Learning how to collect the ICE credentials from two or more potential connecting peers
* Disabling audio on the Broadcast's video display so a broadcaster isn't bothered by a echo while presenting
* Having an accurate active viewer count displayed on the Broadcast page
* Disabling the _Start Broadcast_ button once a connection has been made and a stream is publicly displayed on the Home Page

## Technologies Used

* **Node.js & Express.js** For the HTTP backend server
* **React.js** For the front-end/client interface of my app
* **PostgreSQL** As my relation database management system
* **pg-promise** For interfacing with my database in my backend code
* **socket.io** For allowing real time real time interactions between two or more peers
* **WebRTC** The RTCPeerConnection is the data stream shared between peers
* **STUN Server** A Google provided simple server that shares the ICE credentials (the public facing IP address) to bypass the NAT Server and permit the RTCPeerConnection
* **CSS3**

## Local Setup

You must install [Node.js](https://nodejs.org) in your computer.

You can check for these dependencies with `node -v` from your shell/terminal. If it doesn't complain and you see version numbers you are good to go.

1. Clone this repo into a folder of your choice:
```
       git clone https://github.com/DouglasMacKrell/DougTV.git
```

2. Install dependencies for the Node/Express Server:
```
       npm install
```

3. Install dependencies for the React App (`client` folder):
```
       cd client && npm install
```

4. To launch the React App, inside the `client` folder, run:
```
       npm start
```

10. A new browser tab should have been opened and the App should be running. If that is not the case check the terminals output for errors, if you are unable to troubleshoot the problem, I would be happy to address issues so open [one](/issues)

---

### Please check out my other work at [DouglasMacKrell.com](https://douglasmackrell.com)

---

[![DougTV Social Media](https://dougtv.herokuapp.com/DougTV-Social.png)](https://dougtv.herokuapp.com)

** **

<details>
    <summary>
        Before you leave, please take note:
    </summary>

You're the best! Thank you for visiting - and for this amazing opportunity!

Please give this project a star and be sure to check out my [YouTube Channel](https://youtube.com/BigMacKrell)!

</details>