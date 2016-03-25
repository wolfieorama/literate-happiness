//wrapping your js in a closure is a good habit
(function(){
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.product = gem;
  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'this is a super gem that doesnt facdein a million years!',
  }

})();
