#!/bin/bash

npm install
./node_modules/bower/bin/bower install --allow-root
./node_modules/gulp/bin/gulp.js default
