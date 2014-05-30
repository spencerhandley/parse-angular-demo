

### Installation Instructions

1. Install node - http://nodejs.org/
1. Install grunt v0.4.x - http://gruntjs.com/getting-started
1. Install bower `npm install -g bower`
1. Install coffee-script `npm install -g coffee-script`
1. Make sure you have compass installed (http://compass-style.org/install/)
1. Make sure you are running the latest version of Node (we can't assure you this is gonna work on older versions of Node)
1. Clone this repo `git clone git@github.com:brandid/parse-angular-demo.git`
1. Switch out your Parse keys in **ParseServices.js** (see below)
1. Switch out your Facebook App ID in **ParseServices.js**
1. Remove our [GoSquared](www.gosquared.com) tracking snippet from **index.html**
1. `cd parse-angular-demo`
1. `npm install`
1. `grunt server` - builds and fires up the local node server on localhost:3000
1. Visit http://localhost.com:3000 to develop your site
1. `grunt prod` to build a deployable version in the parse-angular-demo/build folder (`grunt prod` is actually `build` followed by `optimize`)

