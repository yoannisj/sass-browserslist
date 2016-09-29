var browserslist = require('browserslist');
var browserNames = {
      supportFor : [
      'chrome',
      'edge',
      'firefox',
      'ie',
      'opera',
      'safari'
    ]
  };

var getVersionInt = function(ver) {
  var splitIndex = false,
    // check if complex version number
    dotIndex = ver.indexOf('.'),
    hyphenIndex = ver.indexOf('-');

  // determine where the smallest version number ends
  if (dotIndex >= 0) splitIndex = dotIndex;
  else if (hyphenIndex >= 0) splitIndex = hyphenIndex;

  // return smallest version number as integer
  ver = (splitIndex ? ver.substr(0, splitIndex) : ver);
  return parseInt(ver, 10);
};

module.exports = {
  // format the browserslist as expected by 'support-for'
  supportFor: function() {
    // parse browserslist config to get list of supported browsers
    var browsers = browserslist.apply(this, arguments);
    var supported = {};

    // map browserslist values to sass 'support-for' values
    for (var i = 0, ln = browsers.length; i < ln; i ++) {
      var specs = browsers[i].split(' '),
        name = specs[0],
        ver = getVersionInt(specs[1]);

      // use smallest version of supported browser     
      ver = supported.hasOwnProperty(name) ? Math.min(supported[name], ver) : ver;
      supported[name] = ver;
    }

    return supported;
  }
};