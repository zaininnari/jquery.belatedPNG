#!/bin/sh

# compilation_level :
#     WHITESPACE_ONLY
#     SIMPLE_OPTIMIZATIONS
#     ADVANCED_OPTIMIZATIONS

sh ./gjslint.sh
echo $?

java \
    -jar google-compiler/compiler.jar \
    --warning_level VERBOSE \
    --js "js/jquery.belatedPNG.js" \
    --js_output_file js/jquery.belatedPNG.min.js \
    --jscomp_off=internetExplorerChecks \
    --externs google-compiler/jquery-1.6.js \
    --externs google-compiler/extern1.js \
    --compilation_level SIMPLE_OPTIMIZATIONS
