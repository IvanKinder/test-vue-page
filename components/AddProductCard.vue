<template>
  <div class="add-product-card">
    <form action="#" method="post" onsubmit="return false;">
      <ul class="list">
        <li class="required-field">
          <label for="name">Наименование товара<sup>&bull;</sup></label>
          <input
            v-model="name"
            type="text"
            id="name"
            name="product_name"
            placeholder="Введите наименование товара"
            @blur="isNameTouched = true"
            :class="{ errorField: isNameError }"
            maxlength="26"
          />
          <span class="error-msg">
            {{ errMsgHandler(!isNameError) }}
          </span>
        </li>
        <li>
          <label for="description">Описание товара</label>
          <textarea
            v-model="description"
            id="description"
            name="description"
            placeholder="Введите описание товара"
          ></textarea>
        </li>
        <li class="required-field">
          <label for="img_link"
            >Ссылка на изображение товара<sup>&bull;</sup></label
          >
          <input
            v-model="imgSrc"
            type="url"
            id="img_link"
            name="img_link"
            placeholder="Введите ссылку"
            @blur="isImgTouched = true"
            :class="{ errorField: isImgError }"
          />
          <span class="error-msg">
            {{ errMsgHandler(!isImgError) }}
          </span>
        </li>
        <li class="required-field">
          <label for="price">Цена товара<sup>&bull;</sup></label>
          <input
            v-model="price"
            type="number"
            id="price"
            name="price"
            placeholder="Введите цену"
            @blur="isPriceTouched = true"
            :class="{ errorField: isPriceError }"
            maxlength="10"
          />
          <span class="error-msg">
            {{ errMsgHandler(!isPriceError) }}
          </span>
        </li>
      </ul>
      <button
        :class="isDisabled ? 'button-disabled' : 'button-active'"
        v-on:click="addProduct"
        :disabled="isDisabled"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
const nameCheckRegex = /^.{1,26}$/;
const imgCheckRegex = /^.+$/;
const priceCheckRegex = /^[0-9]{1,10}$/;

export default {
  data() {
    return {
      name: null,
      description: null,
      imgSrc: null,
      price: null,
      isNameTouched: false,
      isImgTouched: false,
      isPriceTouched: false,
      errorMsg: "Поле является обязательным",
    };
  },
  methods: {
    addProduct: function () {
      let newProduct = {
        name: this.name,
        description: this.description,
        imgSrc: this.imgSrc,
        price: this.price,
      };
      this.$store.dispatch("addProduct", newProduct);
      this.name = "";
      this.description = "";
      this.imgSrc = "";
      this.price = "";
      this.isNameTouched = false;
      this.isImgTouched = false;
      this.isPriceTouched = false;
    },
    errMsgHandler(isValid) {
      return isValid ? "" : this.errorMsg;
    },
  },
  computed: {
    isDisabled: function () {
      if (this.isNameValid && this.isImgValid && this.isPriceValid) {
        return false;
      }
      return true;
    },
    isNameValid() {
      return nameCheckRegex.test(this.name);
    },
    isNameError() {
      return !this.isNameValid && this.isNameTouched;
    },
    isImgValid() {
      return imgCheckRegex.test(this.imgSrc);
    },
    isImgError() {
      return !this.isImgValid && this.isImgTouched;
    },
    isPriceValid() {
      return priceCheckRegex.test(this.price);
    },
    isPriceError() {
      return !this.isPriceValid && this.isPriceTouched;
    },
  },
};
</script>

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

sup {
  font-size: small;
  color: red;
}

input {
  position: relative;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid white;
  border-radius: 4px;
  width: 270px;
  height: 34px;
  padding: 0 0 0 10px;
  margin-top: 2px;
  margin-bottom: 10px;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #3f3f3f;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.required-field {
  height: 66px;
}

.error-msg {
  position: relative;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
  top: -3px;
}

.errorField {
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 1px solid #ff8484;
  width: 270px;
  height: 34px;
  padding: 0 0 0 10px;
  margin-top: 2px;
  margin-bottom: 0;
}

::placeholder {
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
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
  width: 272px;
  height: 102px;
  border-color: white;
  resize: none;
  padding: 10px 0 0 10px;
  margin: 2px 0 10px 0;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #3f3f3f;
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
  background: white;
}

.button-disabled {
  background: #eeeeee;
  border: solid;
  border-color: #eeeeee;
  color: #b4b4b4;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 284px;
  height: 36px;
  margin-top: 9px;
  cursor: pointer;
}

.button-active {
  background: #7bae73;
  border: solid;
  border-color: #7bae73;
  color: #ffffff;
  border-radius: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  width: 284px;
  height: 36px;
  margin-top: 9px;
  cursor: pointer;
}
</style>
