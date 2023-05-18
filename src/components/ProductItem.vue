<script setup>
    const props = defineProps(['product'])
</script>

<template>
    <li class="product" >
        <span class="image">
            <img :src=props.product.image width="20" />
        </span>
        <label>{{ props.product.title }}</label>
    </li>
</template>

<style scoped>
    .image {
        margin: 5px;
    }
</style>