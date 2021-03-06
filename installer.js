(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
	    return {status: 2, msg: 'Extensions Loaded'};
    };

    ext.jinstalled = function() {
         return true;
    };
	
    ext.loadExt = function(url) {
	ScratchExtensions.loadExternalJS('https://' + url);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
	          ['b', 'jpack installed?', 'jinstalled'],
		  [' ', 'load external extension https:// %s', 'loadExt', 'jgames101.github.io/scratch-extensions/notifications.js'],
        ],
	url: 'https://jgames101.github.io/scratch-extensions/'
    };

    // Register the extension
    ScratchExtensions.register('JGames101', descriptor, ext);
    install()
})({});
function install() {
  ScratchExtensions.loadExternalJS('https://jgames101.github.io/scratch-extensions/notifications/notifications.js');
  ScratchExtensions.loadExternalJS('https://jgames101.github.io/scratch-extensions/test2.js');
}
