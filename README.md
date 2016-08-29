
# EventsManager
Its a web application that helps user to get the information about the upcoming events.

## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone this repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

Tech
```
Express v4.14.0 (Stable) - fast node.js network app framework
AngularJS v1 - HTML enhanced for User Interfaces
Node.js v6.3.1 (Latest) - evented I/O for the backend
```
### Clone gitdash

Clone the gitdash repository using [git]:
```
git clone https: https://github.com/070794/EventsManager/
cd EventsManager
```

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

```
npm install 
bower install
```
If you clone this repo you would already have these present.

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
node Server.js
```
Now browse to the app at `http://localhost:3000/`.


## Directory Layout

```
├── README.md
├── src
│   ├── app 
│   ├── config 
│   ├── controller
│   ├── CSSfile
│   ├── factory
│   ├── images
├   ├── SCSS files
│   ├── view files (view ,event,index,register,home,create,upload,update).html
│     
│   
├── Serverfiles
├── node_modules
├── node_modules
├── package.json
├── gulpfile.js
│   
└── Server.js

```
