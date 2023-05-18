<script setup>
import ProductItem from '@/components/ProductItem.vue'
import { ref } from 'vue';

const productsList = ref({});

async function getData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const finalRes = await res.json();
    productsList.value = finalRes;
}

getData()
</script>

<template>
    <ul class="products-list">
        <product-item
            v-for="product in productsList"
            :product="product"
        ></product-item>
    </ul>
</template>