<template>
  <div class="product" @mouseover="onTrashButton" @mouseleave="offTrashButton">
    <img class="product-image" :src="productImage" alt="default" />
    <img v-show="hovered" class="trash-image" :src="trashImage" alt="trash" />
    <div class="product-text">
      <p class="product-name">{{ productName }}</p>
      <p class="product-description">{{ productDescription }}</p>
      <p class="product-price">{{ productPrice }} руб.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trashImage: "/_nuxt/static/img/trash.png",
      hovered: false,
    };
  },
  methods: {
    onTrashButton() {
      this.hovered = true;
    },
    offTrashButton() {
      this.hovered = false;
    },
  },
  props: {
    productName: {
      type: String,
      default: () => "Наименование товара",
    },
    productDescription: {
      type: String,
      default: () =>
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
    },
    productPrice: {
      type: String,
      default: () => "10 000",
    },
    productImage: {
      type: String,
      default: () => "/_nuxt/static/img/default.png",
    },
  },
};
</script>

<style scoped>
.product {
  position: relative;
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: url("../static/img/cursor.png"), pointer;
}

.product-image {
  width: 332px;
  height: 200px;
}

.trash-image {
  width: 32px;
  height: 32px;
  position: absolute;
  left: 308px;
  top: -8px;
}

.product-name {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  color: #3f3f3f;
}

.product-description {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-top: 16px;
  color: #3f3f3f;
  overflow: hidden;
  word-wrap: break-word;
  text-overflow: ellipsis;
  max-height: 80px
}

.product-price {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  margin-top: 32px;
  color: #3f3f3f;
}

.product-text {
  margin: 12px 16px 24px 16px;
}
</style>