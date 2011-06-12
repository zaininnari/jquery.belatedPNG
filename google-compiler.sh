#!/bin/sh
java \
    -jar google-compiler/compiler.jar \
    --warning_level VERBOSE \
    --js "js/jquery.belatedPNG.js" \
    --js_output_file js/jquery.belatedPNG.min.js \
    --jscomp_off=internetExplorerChecks \
    --externs google-compiler/extern1.js \
    --compilation_level WHITESPACE_ONLY
