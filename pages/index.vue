<template>
  <div class="page">
    <Header />
    <div class="content">
      <AddProductCard />
      <div class="products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  </div>
</template>

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
  background: #FAF9F7;
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