var Loader = pc.createScript('loader');

Loader.prototype.initialize = function() {
  var url = "https://raw.githack.com/xaresys/PlayCanvas-QuickEngine/loadertest/src/test.js";
  var root = this.entity;
  
  /*
  context.assets.loadFromUrl(url, "script").then(function(result) {
      var thisjs = result.resource[0];
      this.entity.model.material.diffuseMap = image;
      this.entity.model.material.update();
  }.bind(this), function(err) {
      console.error(err);
  });
  */
  
  this.app.assets.loadFromUrl(url, 'script', function(err, asset) {
    if (err) {console.error(err);return;}
    
    /*
    cubeModel.addComponent("model", {
        type: "mesh",
        asset: asset
    });
    */
    
    root.addComponent('script');
    root.script.create('test');
  });
};
