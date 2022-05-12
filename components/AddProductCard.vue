<template>
  <div class="add-product-card">
    <form action="#" method="post">
      <ul class="list">
        <li>
          <label for="name">Наименование товара<sup>&bull;</sup></label>
          <input
            type="text"
            id="name"
            name="product_name"
            placeholder="Введите наименование товара"
          />
        </li>
        <li>
          <label for="description">Описание товара</label>
          <textarea
            id="description"
            name="description"
            placeholder="Введите описание товара"
          ></textarea>
        </li>
        <li>
          <label for="mail">Ссылка на изображение товара<sup>&bull;</sup></label>
          <input
            type="url"
            id="img_link"
            name="img_link"
            placeholder="Введите ссылку"
          />
        </li>
        <li>
          <label for="price">Цена товара<sup>&bull;</sup></label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Введите цену"
          />
        </li>
      </ul>
      <button type="submit">Добавить товар</button>
    </form>
  </div>
</template>

<style scoped>
label {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #49485e;
}

li {
  margin-bottom: 16px;
}

sup {
  font-size: small;
  color:red;
}

input {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: solid;
  border-radius: 4px;
  width: 276px;
  height: 30px;
  border-color: white;
}

::placeholder {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding: 10px 0 0 16px;
  color: #b4b4b4;
}

form {
  margin: 0 24px 24px 24px;
  padding-top: 24px;
}

textarea {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 276px;
  height: 102px;
  border-color: white;
  resize: none;
}

.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.add-product-card {
  height: 440px;
  width: 332px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  margin: 16px 32px 0 32px;
  background: white;
}

button {
  background: #eeeeee;
  border: solid;
  border-color: #eeeeee;
  color: #B4B4B4;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 284px;
  height: 36px;
  margin-top: 8px;
}
</style>
