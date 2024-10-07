
## DAY 1

# run a react app
- in terminal we should be in that dir in which we want to run react or change by cd command
run "ls" command and check is node-module folder is present or not if not do 
- "npm install" for install the node module folder
- use "npm run start" now use this coomand for run the project


# npm run build 
- it will create a build folder in the root of the project
- all javascript which we written in react convert in js here
- build floder is use in production for serve


# now go to the src folder(Delete some extra file) 
- setupTest.js
- logo.svg
- reportWebvital
- app.text.js
NOTE- These file are not in use at this time may be uses later

NOTE- App.js and index.js are the main file


## DAY - 2

# Structure of react app
 - in public folder we have a file "index.html" which is main who serve to browser 
 - in src we have two files App.js and index.js
 - In "index.js" we render the "App.js" script and "index.js" is connected to "index.html ", which serve to the browser.


 ## DAY - 3

 # About the hooks
  - useState : let [variable, function] = useState(value)
    -- useState help to render the changes directly to the UI (UI updation)

 # React Fiber
  - React fiber is an onoging reimplement of React's core algorithm. It is the culmination of over two years of research by React Team...
  - The goal is to increase its suitability for areas like animation, layouts, and gesture.
  - Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it over multiple frames..
  - key feature the ability to pause, abort, or reuse work as new updates come in, the ability  to assign priority to different types of updates, and new concurrency primitive.

  - Prerequisites
    - React components, Elements and Instances
    - Reconciliation :
    - React Basics Theoretical Concepts
    - React Design Principle

    **Reconciliation :** Reconciliation is a algorithm behind what is popularly understood as the "Virtual DOM" The algorithm react uses to diff. one tree with another to determine which parts need to be  changed. Update mean a change in the data used to render to React app. Usually of 'setState'. Eventually results in a re-render.

   -------------FOR MORE ABOUT REACT FIBER`(https://github.com/acdlite/react-fiber-architecture)`--------------

 # 