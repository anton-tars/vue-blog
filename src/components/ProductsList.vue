<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { getProducts } from '@/core/services/api/api.js';
import { ref, onMounted } from 'vue';

const productsList = ref([]);
// productsList.value = await getProducts();
// const init = async () => {
//     productsList.value = await getProducts();
// }
// init();

onMounted(async () => {
    productsList.value = await getProducts();
})

// console.log(productsList);
</script>

<template>
    <ul class="products-list">
        <product-item
            v-for="product in productsList"
            :product="product"
        ></product-item>
    </ul>
</template>