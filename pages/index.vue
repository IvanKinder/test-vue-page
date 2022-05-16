<template>
  <div class="page">
    <Header />
    <div class="content">
      <AddProductCard class="add-product-card" />
      <transition-group class="products-grid" name="products" tag="div">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :productName="product.name"
          :productDescription="product.description"
          :productPrice="product.price"
          :productImage="product.imgSrc"
          :productId="product.id"
        >
        </ProductCard>
      </transition-group>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    this.$store.dispatch("getProducts");
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
.page {
  background: #faf9f7;
}
@media (min-width: 1081px) {
  html {
    width: 1440px;
    margin: 0 auto;
  }
  .content {
    display: flex;
    gap: 16px;
    margin-top: 16px;
    padding: 0 32px 0 32px;
  }
  .products-grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
  .products-enter-active,
  .products-leave-active {
    transition: 0.5s;
  }
  .products-enter,
  .products-leave-to {
    opacity: 0;
  }
}
@media (max-width: 1080px) {
  html {
    width: 1080px;
    margin: 0 auto;
  }
  .content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 90px;
    margin-top: 16px;
    padding: 0 32px 0 32px;
    justify-items: center;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 90px;
  }
}
</style>>
