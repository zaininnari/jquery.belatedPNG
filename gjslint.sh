#!/bin/sh

exe_gjslint(){
  gjslint --strict $1 | sed -n '/^Line/p'  | while read line
  do
    if ! expr "${line}" : "^Line.*\?E:0110" >/dev/null ; then
      echo ${line}
    fi
  done
}

exe_gjslint "js/jquery.belatedPNG.js"
exe_gjslint "test/test.js"
