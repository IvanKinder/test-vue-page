<template>
  <div class="product">
    <img src="../static/img/default.png" alt="default" />
    <div class="product-text">
      <p class="product-name">Наименование товара</p>
      <p class="product-description">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <p class="product-price">10 000 руб.</p>
    </div>
  </div>
</template>

<style scoped>
.product {
  width: 332px;
  height: 423px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  cursor: url("../static/img/cursor.png"), pointer;
}

img {
  width: 332px;
  height: 200px;
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