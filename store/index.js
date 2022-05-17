import axios from "axios";

export const state = () => ({
  productsList: [],
});

export const mutations = {
  addProduct: (state, payload) => {
    state.productsList.push(payload);
  },
  removeProduct: (state, payload) => {
    for (let i = 0; i < state.productsList.length; i++) {
      if (state.productsList[i].id === payload) {
        state.productsList.splice(
          state.productsList.indexOf(state.productsList[i]),
          1
        );
      }
    }
  },
  sortByName: (state, asc) => {
    function sortFn(a, b) {
      if (asc) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      } else {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
        return 0;
      }
    }
    state.productsList.sort(sortFn);
  },
  sortByPriceMax: (state) => {
    function sortFn(a, b) {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
      return 0;
    }
    state.productsList.sort(sortFn);
  },
  sortByPriceMin: (state) => {
    function sortFn(a, b) {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      return 0;
    }
    state.productsList.sort(sortFn);
  },
};

export const actions = {
  addProduct: (context, newProduct) => {
    async function postProduct(newProduct) {
      await axios.post(`api/product`, newProduct);
    }
    postProduct(newProduct);
    context.commit("addProduct", newProduct);
  },
  removeProduct: (context, productToDelete) => {
    async function deleteProduct(productToDelete) {
      await axios.post(`api/delete`, productToDelete);
    }
    deleteProduct(productToDelete);
    context.commit("removeProduct", productToDelete.id);
  },
  async getProducts(context) {
    await axios.get(`api/products`).then((value) => {
      for (let i = 0; i < value.data.length; i++) {
        context.commit("addProduct", value.data[i]);
      }
    });
  },
  sortByName: (context, asc) => {
    context.commit("sortByName", asc);
  },
  sortByPriceMin: (context) => {
    context.commit("sortByPriceMin");
  },
  sortByPriceMax: (context) => {
    context.commit("sortByPriceMax");
  },
};
