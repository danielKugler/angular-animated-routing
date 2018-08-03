# Animated Routing

This code was gernerated using the Angular-CLI.
The app directory is what you are looking for.

An example on how to make routing animations working and waiting for component related animations as animateChild Animations.

Took me a little while to get rid of a sync service for animations. The new Angular Versions have a pretty cool, whole new way of handling animations without the need of tracking states through all over the application.

Hope this will help you when it comes to routing paired with animations.


## Requirement
* [NodeJS](http://nodejs.org): At the time of creation i was running v8.11.3
* angular-cli

## Clone the rep
```sh
$ git clone https://github.com/danielKugler/angular-animated-routing.git
```

## Installation
using yarn
```sh
$ yarn install
```
using npm 
```sh
$ npm install
```

## Start for development

Run `yarn start` or `npm start` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## License

```
"THE BEER-WARE LICENSE" (Revision 42):
<daniel@monrow.de> wrote this file. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return Poul-Henning Kamp
```
