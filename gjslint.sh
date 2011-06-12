#!/bin/sh
js="js/jquery.belatedPNG.js"


gjslint --strict ${js} | sed -n '/^Line/p'  | while read line
do
	if ! expr "${line}" : "^Line.*\?E:0110" >/dev/null ; then
		echo ${line}
	fi
done

