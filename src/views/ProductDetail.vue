<template>
    <div>
      <h1>{{ product.name }}</h1>
      <p>{{ product.description }}</p>
      <p>Precio: ${{ product.price }}</p>
      <button @click="addToCart(product)">Agregar al Carrito</button>
    </div>
  </template>
  
  <script>
  import apiClient from '@/plugins/axios';
  
  export default {
    data() {
      return {
        product: {},
      };
    },
    async created() {
      const id = this.$route.params.id;
      const response = await apiClient.get(`/Productos/${id}`);
      this.product = response.data;
    },
    methods: {
      addToCart(product) {
        console.log(`Producto ${product.name} agregado al carrito`);
        // Aquí puedes implementar lógica para el carrito de compras
      },
    },
  };
  </script>
  