let products = [
  {
    id: 1,
    name: "black Ninja",
    price: 99
  },
  {
    id: 2,
    name: "Happy Ninja",
    price: 99
  },
  {
    id: 3,
    name: "Hoodie Ninja",
    price: 99
  },
  {
    id: 4,
    name: "Hoodie black",
    price: 99
  },
  {
    id: 5,
    name: "Hoodie pink",
    price: 99
  },
  {
    id: 6,
    name: "Patient Ninja",
    price: 99
  },
  {
    id: 7,
    name: "WTF Ninja",
    price: 99
  },
  {
    id: 8,
    name: "WTF-2 Ninja",
    price: 99
  },
  {
    id: 9,
    name: "Red WOO",
    price: 99
  },
  {
    id: 10,
    name: "Blue WOO",
    price: 99
  },
  {
    id: 11,
    name: "Simple Ninja",
    price: 99
  },
  {
    id: 12,
    name: "Red Ninja",
    price: 99
  }
];

var vm = new Vue({
  el: "#vue",
  data: {
    products: products,
    //isFocus: false,
    cart: []
  },
  computed: {
    count: function() {
      return this.cart.reduce(function(n, cart) {
        return cart.qty + n;
      }, 0);
    },
    total: function() {
      return this.cart
        .reduce(function(n, cart) {
          return cart.price * cart.qty + n;
        }, 0).toFixed();
    }
  },
  methods: {
    focus(e) {
      e.currentTarget.parentElement.classList.toggle("focus");
    },
    off_focus(e) {
      e.target.classList.remove("focus");
    },
    addToCart(product) {
      this.$set(product, "qty", +1);
      this.cart.push(product);
    },
    unblock(id) {
      for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          delete this.products[i].qty;
          break;
        }
      }
    },
    del(index, id) {
      this.cart.splice(index, 1);
      this.unblock(id);
    }
  }
});