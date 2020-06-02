// Mustache = require("Mustache");

class CeegeeTemplate {
  constructor(path) {
    console.log('new CeeGee Template for ' + path);
    this.path = path;
    // TODO: load up that path, be sure it exists, etc.
  }
}

// CeegeeTemplate.prototype.getVars = function() {
//     Mustache.parse('{{foo}} is {{bar}}')
//         .filter(function(v) { return v[0] === 'name' })
//         .map(function(v) { return v[1]; });
// }

// CeegeeTemplate.prototype.inquiryPrompt = function() {
// console.log("return inquiry prompts for this " + JSON.stringify(getVars()));
// }

module.exports = CeegeeTemplate;
