#!/usr/bin/env node

var main = require( '../src/main' );
var programOptions = require( '../src/options' );

var cliLauncher = require( 'clix' );

cliLauncher.launch( programOptions, function ( cli ) {
  main.run( cli );
} );
