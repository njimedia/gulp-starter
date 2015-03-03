# NJI gulp-starter

Starter `gulp` set up. Includes common tasks needed for any project.

## Install npm dependencies

The `package.json` file contains all the information to download all necessary node modules into the `node_modules` directory. (**note**: you must have node installed on your computer)

```
npm install
```

## Running `gulp`

todo...

## Structure

This sample project is broken up so that all `gulp` code lives outside the root of the project. There is a root directory (`httpdocs`) and a `gulp` directory which are explained below.

### Inside the root directory

The `root` folder for this project is at `httpdocs` which sis broken down into two directories.

The `src` directory contains all the files before compilation or processing (or `input`). The `src` directory is where all the work will be done.

The `assets` directory contains the compiled/processed files (or `output`). This directory doesn't exist when you first clone the repository. It will be created as soon as you run any `gulp` command (that outputs to the assets folder).

### Inside the `gulp` directory and gulpfile

Todo...

## Tasks

Tasks are...

#### Create sprites:

```
gulp sprite
```

This command will take all the svg icons inside the `httpdocs/src/icons` directory and combine them into a single svg sprite and a single png sprite in the `httpdocs/assets/img` direcotry.

#### Compile scss & browserify:

```
gulp
```

This command sets up a `watch` on all `.js` and `.scss` files in the `httpdocs/src` directory and compiles them into their appropriate outputs inside the `httpdocs/assets` directory.
