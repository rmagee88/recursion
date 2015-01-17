// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // Base Cases
  // if it's not an array or object, return those values as strings
  if (typeof(obj) === 'string') {
    // if it's a string add quotes
    return '"' + obj + '"';
  } else if (typeof(obj) !== 'object') {
    return String(obj);
  } else {
    // Check to see if it's null
    if (obj === null) {
      return 'null';
    }
    // check to see if it's a bool
    if (typeof(obj) === 'boolean') {
      if (obj) {
        return 'true';
      } else {
        return 'false';
      }
    }
    // check to see if it's a function or undefined
    if (typeof(obj) === 'function' || typeof(obj) === 'undefined') {
      return '';
    }

    // Recursion!
    // Check to see if it's an object or an array
    if (obj.length === undefined) {
      // Object
      // if the object is empty return '{}'
      if (Object.keys(obj).length === 0) {
        return '{}';
      } else {
        // if there's any length loop through and string each value
        var startTxt = '{', endTxt = '}', content = '', 
        keys = Object.keys(obj);
        
        for (var i = 0; i < keys.length; i++) {
          if (typeof(obj[keys[i]]) === 'function' || typeof(obj[keys[i]]) === 'undefined') {
            content += '';
          // otherwise loop through
          } else if (i === keys.length - 1) {
            // if it's the last item don't add a comma
            content += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
          } else {
            content += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
          }
        }
        return startTxt + content + endTxt;
      }
    } else {
      // Array
      if (obj.length) {
        // if there's any length loop through and string each value
        var startTxtA = '[', endTxtA = ']', contentA = '';
        for (var j = 0; j < obj.length; j++) {
          // if it's the last item don't add a comma
          if (j === obj.length - 1) {
            contentA += stringifyJSON(obj[j]);
          } else {
            contentA += stringifyJSON(obj[j]) + ',';
          }
        }
        return startTxtA + contentA + endTxtA;
      } else {
        return '[]';
      }
    }
  }
};
