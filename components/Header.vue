<template>
  <div>
    <div class="header">
      <h1 class="add-product-header">Добавление товара</h1>
      <button class="sort-button">
        <span @click="showMenu" class="text">{{ sortState }}</span>
        <span class="arrow-to-rotate">&#709;</span>
        <div :class="sortMenuClass" @mouseleave="hideMenu">
          <ul>
            <li>
              <span class="text" @click="sortByPriceMin">По цене &uarr;</span>
            </li>
            <li>
              <span class="text" @click="sortByPriceMax">По цене &darr;</span>
            </li>
            <li>
              <span class="text" @click="sortByName">По наименованию</span>
            </li>
          </ul>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortMenuClass: "menu-hidden",
      asc: true,
      sortState: "По умолчанию",
    };
  },
  methods: {
    showMenu() {
      this.sortMenuClass =
        this.sortMenuClass === "menu-shown" ? "menu-hidden" : "menu-shown";
    },
    hideMenu() {
      this.sortMenuClass = "menu-hidden";
    },
    sortByPriceMin() {
      this.$store.dispatch("sortByPriceMin");
      this.sortState = "По цене ↑";
    },
    sortByPriceMax() {
      this.$store.dispatch("sortByPriceMax");
      this.sortState = "По цене ↓";
    },
    sortByName() {
      this.$store.dispatch("sortByName", this.asc);
      this.asc = !this.asc;
      this.sortState = "По наименованию";
    },
  },
};
</script>


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
.text {
  cursor: pointer;
}
ul {
  list-style-type: none;
  padding-top: 7px;
}
li {
  margin-bottom: 7px;
}
.sort-button {
  position: relative;
  width: 121px;
  height: 36px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 0 solid #fff;
  border-radius: 4px;
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
.menu-shown {
  position: absolute;
  top: 25px;
  z-index: 1;
  background: #3f3f3f;
  height: auto;
  width: 121px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 0 solid #fff;
  border-radius: 4px;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
}
.menu-hidden {
  position: absolute;
  top: 30px;
  background: #3f3f3f;
  height: auto;
  width: 121px;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border: 0 solid #fff;
  border-radius: 4px;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #b4b4b4;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0;
}
</style>
