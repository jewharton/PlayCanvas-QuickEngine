var Loader = pc.createScript('loader');

var funcTable = [];
function Q(f) {
    if (typeof(f) == "function") {
        funcTable.push(f);
    } else {
        throw "Q (QuickEngine Script Wrapper): Argument must be a function.";
    }
}

Loader.prototype.initialize = function() {
  var url = "https://playcanvas.com/api/assets/files/scripts/fileLoader.js?id=11309558";
  var root = this.entity;
  
  this.app.assets.loadFromUrl(url, 'script', function(err, asset) {
    if (err) {console.error(err);return;}
    root.script.create('fileLoader');
    root.script.move('fileLoader', 0);
  });
};
