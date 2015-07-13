var dispatcher = require( 'dispatchy' );
var merge = require( 'extend' );

function getErrorResults( results ) {
  var filtered = [ ];

  results.forEach( function ( result ) {
    var filteredMessages = result.messages.filter( function ( message ) {
      return message.severity === 2;
    } );

    if ( filteredMessages.length > 0 ) {
      filtered.push( {
        filePath: result.filePath,
        messages: filteredMessages
      } );
    }
  } );

  return filtered;
}

module.exports = merge( dispatcher.create(), {
  lint: function ( filesSrc, opts ) {

    var me = this;
    opts = opts || { };

    var files;
    var cfg = opts.cfg;
    var useCache = !!opts.useCache;

    filesSrc = filesSrc || [ ];

    var cache = require( 'file-entry-cache' ).create( '__eslinter__' );

    if ( !useCache ) {
      cache.deleteCacheFile();
      files = filesSrc;
    } else {
      files = cache.getUpdatedFiles( filesSrc );
    }

    me.fire( 'eslinter:start', { filesSrc: filesSrc, files: files } );

    if ( files.length === 0 ) {
      return { output: '', errorCount: 0 };
    }

    var eslint = require( 'eslint' );
    var engine = new eslint.CLIEngine( cfg );

    var report = engine.executeOnFiles( files );

    var results = report.results || [ ];

    results.forEach( function ( result ) {
      if ( result.errorCount > 0 || result.warningCount > 0 ) {
        cache.removeEntry( result.filePath );
      }
    } );

    if ( opts.quiet ) {
      results = getErrorResults( results );
    }

    cache.reconcile();

    var formatter = typeof opts.format === 'function' ? opts.format : engine.getFormatter( opts.format );

    if ( !formatter ) {
      throw new Error( 'Could not find formatter: ' + opts.format );
    }

    var output = formatter( results );

    return {
      output: output,
      warningCount: report.warningCount,
      errorCount: report.errorCount
    };
  }
} );
