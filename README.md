# classroom #

An adaption of th "Classroom Coding with Prof. Frisby" Series 
Pt1 [https://youtu.be/h_tkIpwbsxY]()



## What is this repository for? ##

* A simple Playground to learn React
* Version: 0.1.0

> You'll need to install yarn the package manager. See installation docs for more Deatails: [https://yarnpkg.com/lang/en/docs/install/]()



## How do I get set up? ##

Clone the Repository:

    git clone https://github.com/vaddi/classroom.git

Get into the Repositiory Folder:

    cd classroom



## Run your Application ##

Run yarn to load dependencies:

    yarn

Run Application:

    yarn start



## Advanced ##

### Pt1 - 5m41s - Monoids ###

Replacing by a monoid

// makeUrl :: String -> Url
const makeUrl = (t) => {
  {start, end} = baseUrl.split("{TAGS}")
  return mconcat([start, t, end])
}

https://youtu.be/h_tkIpwbsxY?t=5m41s


### Pt1 - - Functors ###

Replacing by a functor

// makeUrl :: Sting -> Url
const makeUrl = (t) => replace("{TAGS}", t, baseUrl)

https://youtu.be/h_tkIpwbsxY?t=11m58s


### Pt2 - 7m2s - Isomorphism ###



https://youtu.be/oZ6C9h49bu8?t=7m2s


### Pt2 - 14m12s - Fold ###



https://youtu.be/oZ6C9h49bu8?t=14m12s


### Pt2 - 17m17s - Natural Transformation ###

Function :: Maybe a -> Option a

https://youtu.be/oZ6C9h49bu8?t=17m17s




## Links ##

### Learn React ###
* [codecademy.com](https://www.codecademy.com/) 
* [facebook.github.io](https://facebook.github.io/react/) 

### Yarn ###
* [yarnpkg.com](https://yarnpkg.com/lang/en/docs/install/)
* [code.facebook.com](https://code.facebook.com/posts/1840075619545360)

### Babel ###
* [babeljs.io](https://babeljs.io/)
* [babeljs.io/learn-es2015](https://babeljs.io/learn-es2015/)

