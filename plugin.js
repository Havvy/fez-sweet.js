var SweetJS = require('sweet.js');
var Promise = require('bluebird');
var inspect = require('util').inspect;

module.exports = function SweetJS (options) {
    var cwd = process.cwd();
    var modules = (options.modules || []).map(function (modulename) {
        return SweetJS.loadNodeModule(cwd, modulename);
    });

    var options = {
        modules: modules,
        readableNames: options.readableNames,
        escodegen: options.escodegen || undefined
    };

    function sjs(promise) {
        return promise
        .then(function (input) {
            var src = input.toString();
            var outfile = SweetJS.compile(src, options).code;
            return outfile;
        });
    }

    return function (inputs) {
        return Promise.all(inputs.map(function (input) { return input.asBuffer(); }).map(sjs));
    }
}