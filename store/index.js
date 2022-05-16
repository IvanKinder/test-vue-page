import axios from "axios";

let products = [
  {
    id: "redaf",
    name: "НаименованиеSSS товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
  {
    id: "safsqwfw",
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
  {
    id: "aefqwaq",
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
  {
    id: "weq",
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
  {
    id: "aefwaef",
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
  {
    id: "wvaevv",
    name: "Наименование товара",
    description:
      "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    price: 10000,
    imgSrc: "/img/default.png",
  },
];

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
};

export const actions = {
  addProduct: (context, newProduct) => {
    async function postProduct(newProduct) {
        console.log(newProduct);
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
};
