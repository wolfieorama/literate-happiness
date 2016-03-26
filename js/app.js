//wrapping your js in a closure is a good habit
(function(){
  var app = angular.module('store', []);

  var gems = [
      {
      name: 'Dodecahedron',
      price: 2,
      description: 'this is a super gem that doesnt fade in a million years!',
      canPurchase: true,
      soldOut: false,
      images: [
        "assets/image1.jpg",
        "assets/image2.jpg"
      ],
    },
    {
      name: 'Pentagonal gem',
      price: 5.95,
      description: 'this is a super on steroids gem that doesnt fade in a gazillion years!',
      canPurchase: true,
      soldOut: false,
      images: [
        "assets/image3.jpg",
        "assets/image4.jpg"
      ],
    }
  ];

  app.controller('StoreController', function(){
    this.products = gems;
  });

})();
