# GameOn 

Layouts: 
https://www.figma.com/file/prxFGnSUoEhk6PTcMaJQim/UI-Design-GameOn-EN?node-id=0%3A1


---
TASKS
---

- Complete & correct frontend codebase (HTML / CSS / Javascript) ->
see repo issues  
     https://github.com/OpenClassrooms-Student-Center/GameOn-website-FR/issues

---
---
ENVIRONMENT
---

DOCKER
https://docs.docker.com/get-started/02_our_app/

note - to be able to run Docker with a node project will require the use of express
https://nodejs.org/fr/docs/guides/nodejs-docker-webapp/


- install Docker desktop
- create package.json :

       npm init

- Create a file named Dockerfile in the same folder as the file package.json with the following contents:
    
 
        FROM node:12-alpine
        WORKDIR /app
        COPY . .
        RUN yarn install --production
        CMD ["node", "src/index.js"]

- Open a terminal and go to the app directory with the Dockerfile. Now build the container image using the docker build command:

        docker build -t getting-started .


- Start an App Container using the docker run command and specify the name of the image we just created:

        docker run -dp 3000:3000 getting-started

<small>('dp':  “detached” mode (in the background) + mapping between the host’s port 3000 to the container’s port 3000.)</small>


---
### SASS install /use
---
- `brew sass`  or  `npm i sass`
- create sass input folder +  css output folder
- have html point towards css output files

- add script to package.json to automatically update/recompile scss changes and output to css :  
        
        "scripts": {
            "scss": "sass --watch scss:css"
            }

- run command `sass ` or  `npm run sass`

- !! browser inspector => deactivate 'show original sources' so it uses .css stylesheet and not .scss (which sass syntax will not do here in the browser)

---
---

SASS SCSS AUTOPREFIXER
-----
- install: 

        npm install autoprefixer postcss postcss-cli -g

- add script:

        "prefix": "postcss ./css/ohmyfood-main.css --use autoprefixer -d ./css/prefixed/"

- and       
        
        "browserslist": "last 4 versions"

- run:

        npm run prefix


----

