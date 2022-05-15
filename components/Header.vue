<template>
  <div>
    <div class="header">
      <h1 class="add-product-header">Добавление товара</h1>
      <button class="sort-button">
        По умолчанию
        <span class="arrow-to-rotate">&#709;</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 0 32px;
}
.add-product-header {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 35px;
  color: #3f3f3f;
}
.sort-button {
  width: 121px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: solid;
  border-radius: 4px;
  border-color: #fff;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}
.arrow-to-rotate {
  display: inline-block;
  transform: scaleY(0.5);
}
</style>
