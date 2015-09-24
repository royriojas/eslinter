'use strict';
var nodeProcess = require( '../lib/process' );

module.exports = {
  dirname: __dirname,

  run: function ( cli ) {

    // region requires
    //var expand = require( 'glob-expand' );

    var path = require( 'path' );
    //var process = require( './../lib/process' );
    // endregion

    var opts = cli.opts;

    var files = cli.expandGlobs( cli.opts._ ).map( function ( file ) {
      return path.resolve( file );
    } );

    if ( files.length === 0 ) {
      //console.log( chalk.green( '>> no files to beautify' ) );
      cli.ok( 'No files to check' );
      return;
    }

    var cfg = { configFile: cli.pathToConfig, fix: opts.fix };
    var useCache = !!opts.useCache;

    var format;
    try {
      format = require( opts.format );
    } catch (ex) {
      format = opts.format;
    }

    var eslinter = require( '../index' ).create( {
      useCache: useCache,
      format: format,
      cfg: cfg,
      cacheId: opts.cacheId
    } );

    eslinter.on( 'eslinter:start.cli', function ( e, _args ) {
      cli.subtle( 'Files to process: ' + _args.files.length );
    } );

    cli.subtle( 'config:', cfg.configFile );
    cli.subtle( 'cache:', useCache + ', format:', opts.format );

    var response = eslinter.lint( files );

    eslinter.off( '.cli' );

    var errosCount = response.errorCount > 0;
    if ( errosCount || response.warningCount > 0 ) {
      nodeProcess.stdout.write( response.output );

      if ( errosCount ) {
        cli.error( 'Eslint validation failed. Total errors:', response.errorCount );
      }
      if ( response.warningCount > 0 ) {
        cli.log( 'Eslint warnings found. Total warnings', response.warningCount );
      }

      nodeProcess.exit( errosCount ? 1 : 0 );
    } else {
      cli.ok( 'Eslint validation complete. No errors found' );
    }

  }
};
