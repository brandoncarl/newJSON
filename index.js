

module.exports = newJSON = {};


/**
 * Parses both standard JSON and newline delimited JSON
 */
newJSON.parse = function(str, options) {

  var options = options || {},
      handle = options.handle || 'record';

  if (str.length) {
    var re = new RegExp('} *[\r\n]+ *{', 'g');

    if (str.match(re)) {
      str = str.trim();
      var arr = new Array();
      var lines = str.replace(re, '}\n{').split('\n');
      for (var i = 0, len = lines.length; i < len; i++) {
        if ('' === lines[i].trim()) lines[i] = '{}';
        arr.push('"' + handle + i + '": ' + lines[i]);
      }
      return JSON.parse('{' + arr.join(', ') + '}');
    } else
      return JSON.parse(str);
  } else
    return {};

}
