'use strict';
var nodeProcess = require( '../lib/process' );

module.exports = {
  dirname: __dirname,

  run: function ( cli ) {

    // region requires
    var expand = require( 'glob-expand' );

    var path = require( 'path' );
    var process = require( './../lib/process' );
    // endregion

    var opts = cli.opts;

    var files = opts._.map( function ( glob ) {
      return path.resolve( process.cwd(), glob );
    } );

    files = expand.apply( null, files );

    if ( files.length === 0 ) {
      //console.log( chalk.green( '>> no files to beautify' ) );
      cli.ok( 'No files to check' );
      return;
    }

    var cfg = { configFile: cli.pathToConfig };

    var eslinter = require( '../index' );
    var useCache = !!opts.useCache;

    eslinter.on( 'eslinter:start.cli', function ( e, _args ) {
      cli.subtle( 'Total files: ' + _args.filesSrc.length + ', files to process: ' + _args.files.length );
      if ( _args.files.length === 0 ) {
        cli.subtle( 'No files has changed since last run' );
      }
    } );

    cli.subtle( 'cache:', useCache, 'format:', opts.format );

    var format;
    try {
      format = require( opts.format );
    } catch (ex) {
      format = opts.format;
    }

    var response = eslinter.lint( files, {
      useCache: useCache,
      format: format,
      cfg: cfg
    } );

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
