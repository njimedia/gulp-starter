# NJI gulp-starter

Starter `gulp` set up. Includes common tasks needed for any project. This project assumes you have previously installed node. If you haven't then check out [nodejs.org](http://nodejs.org/) for instructions.

## Install npm dependencies

The `package.json` file contains all the information to download all necessary node modules dependencies into a `node_modules` directory. (**note**: you must have node installed on your computer)

```
npm install
```

## Running `gulp`

You have the option of running the local version of `gulp` installed on the project or run the global `gulp` which you may have installed on your machine.

##### Use Local `gulp` (preferred)

From the directory your `node_modules` are installed run:

```
./node_modules/.bin/gulp
```

It is always better to run the local version of gulp to ensure everything works as expected. If the above is too verbose you can always edit your `~/.bashrc` to include an alias for the local gulp like this:

```
alias lgulp='./node_modules/.bin/gulp'
```

This way you can still use the global `gulp` if you wanted.

##### Use global `gulp` (preferred)

If you have installed `gulp` globally you can simply run:

```
gulp
```

However, sometime in the future some things might be broken when running a version of gulp different than the one included in the project.

## Structure

This sample project is broken up so that all `gulp` code lives outside the root of the project. There is a root directory (`httpdocs`) and a `gulp` directory which are explained below.

### Inside the root directory

The `root` folder for this project is at `httpdocs` which sis broken down into two directories.

The `src` directory contains all the files before compilation or processing (or `input`). The `src` directory is where all the work will be done.

The `assets` directory contains the compiled/processed files (or `output`). This directory doesn't exist when you first clone the repository. It will be created as soon as you run any `gulp` command (that outputs to the assets folder).

### Inside the `gulp` directory and gulpfile

The `gulp` directory includes `tasks` and `util` along with a `config.js` file. The `tasks` directory contains all the tasks gulp will be running. The `util` directory contains some helpers the tasks use. And the `config.js` file has a configuration object used by the tasks.

## Tasks

Tasks are run by `gulp` to automate routine things like compiling scss, creating a sprite, or compiling browserified javascript.

#### Create sprites:

```
gulp sprite
```

This task will take all the svg icons inside the `httpdocs/src/icons` directory and combine them into a single svg sprite and a single png sprite in the `httpdocs/assets/img` direcotry. A scss stylesheet is also created by this task

#### Compile Browserified Js

This task will compile browserified javascript. It also uses `watchify` to watch for changes on any files included in the entry point (`app.js` in this case) and recompiles only the parts it needs to.

```
gulp browserify
```

> the default task will automatically run the browserify task

#### Compile scss

Compiles scss files once. Takes `httpdocs/src/scss/styles.scss` and compiles it into `httpdocs/assets/css/styles.css`

```
gulp sass
```

> the default task sets up a watch that will check for changes in any scss file in the src/scss directory and recompile.

#### The Default Task

Compiles scss & browserified js:

```
gulp
```

This command sets up a `watch` on `.scss` files in the `httpdocs/src/scss` directory and compiles them. It will also run `browserify` which has it's own built-in watch system using `watchify`.
