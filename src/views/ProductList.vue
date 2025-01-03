<template>
    <div>
      <h1>Productos</h1>
      <div v-for="product in products" :key="product.id" class="product">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Precio: ${{ product.price }}</p>
        <router-link :to="`/product/${product.id}`">Ver Detalles</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import apiClient from '@/plugins/axios';
  
  export default {
    data() {
      return {
        products: [],
      };
    },
    async created() {
      const response = await apiClient.get('/Productos');
      this.products = response.data;
    },
  };
  </script>
  