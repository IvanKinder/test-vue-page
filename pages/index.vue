<template>
  <div class="page">
    <Header />
    <div class="content">
      <AddProductCard />
      <div class="products-grid">
        <div v-for="product in products" :key="product.id">
          <ProductCard
            :productName="product.name"
            :productDescription="product.description"
            :productPrice="product.price"
            :productImage="product.imgSrc"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      products: this.$store.state.productsList,
    };
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html {
  width: 1440px;
  margin: 0 auto;
}
.page {
  background: #faf9f7;
}
.content {
  display: flex;
  gap: 16px;
  margin-top: 16px;
  padding: 0 32px 0 32px;
}
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
</style>>
