var dispatcher = require( 'dispatchy' );
var extend = require( 'extend' );
var path = require( 'path' );

function getErrorResults( results ) {
  var filtered = [ ];

  results.forEach( function ( result ) {
    var filteredMessages = result.messages.filter( function ( message ) {
      return message.severity === 2;
    } );

    if ( filteredMessages.length > 0 ) {
      filtered.push( { filePath: result.filePath, messages: filteredMessages } );
    }
  } );

  return filtered;
}

var linter = extend( dispatcher.create(), {
  _init: function ( opts ) {
    var me = this;
    me.opts = opts;
  },
  lint: function ( filesSrc ) {

    var me = this;
    var opts = me.opts || { };

    var files = filesSrc;
    var cfg = opts.cfg;

    me.fire( 'eslinter:start', { files: filesSrc } );

    if ( files.length === 0 ) {
      return { output: '', errorCount: 0 };
    }

    var eslint = require( 'eslint' );
    var engine = new eslint.CLIEngine( extend( cfg, {
      cache: opts.useCache,
      cacheFile: path.resolve( path.join( __dirname, './.cache' ) + '/.eslintcache' )
    } ) );

    var report = engine.executeOnFiles( files );

    var results = report.results || [ ];

    if ( opts.quiet ) {
      results = getErrorResults( results );
    }

    var formatter = typeof opts.format === 'function' ? opts.format : engine.getFormatter( opts.format );

    if ( !formatter ) {
      throw new Error( 'Could not find formatter: ' + opts.format );
    }

    if ( cfg.fix ) {
      eslint.CLIEngine.outputFixes( report );
    }

    var output = formatter( results );

    return {
      output: output,
      warningCount: report.warningCount,
      errorCount: report.errorCount
    };
  }
} );

module.exports = {
  create: function ( opts ) {
    var ins = Object.create( linter );
    ins._init( opts );

    return ins;
  }
};
