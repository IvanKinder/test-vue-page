const products = [
  {
    id: 0,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 1,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 2,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 3,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 4,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 5,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/_nuxt/static/img/default.png",
  },
];

export const state = () => ({
  productsList: products,
});

export const mutations = {
  addProduct: (state, payload) => {
    state.productsList.push(payload);
  },
  removeProduct: (state, payload) => {
    for (let i = 0; i < state.productsList.length; i++) {
        if (state.productsList[i].id === payload) {
            state.productsList.splice(state.productsList.indexOf(state.productsList[i]), 1);
        }
    }
  },
};

export const actions = {
  addProduct: (context, payload) => {
    context.commit("addProduct", payload);
  },
  removeProduct: (context, payload) => {
    context.commit("removeProduct", payload);
  },
};
