const products = [
  {
    id: 0,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 1,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 2,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 3,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 4,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
    imgSrc: "/_nuxt/static/img/default.png",
  },
  {
    id: 5,
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: "10 000",
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
};

export const actions = {
  addProduct: (context, payload) => {
    context.commit("addProduct", payload);
  },
};
