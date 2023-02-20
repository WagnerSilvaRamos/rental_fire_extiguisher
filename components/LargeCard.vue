<template>

    <NuxtLink :to="`/products/${card.id}`" class="card">
        <img class="image" :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)" alt="">
        <h3 class="header">{{card.title}}</h3>
        <p class="snippet">{{card.snippet}}</p>
</NuxtLink>

</template>

<script>
export default {
    props: ['card']
}
</script>

<style scoped>
.card {
        width: 31.5%;
        height: 25rem;
        border: none;
        overflow: hidden;
        padding: 0;
        cursor: pointer;
    }
    .image {
        height: 65%;
        border-radius: 0.5rem;
        margin-bottom: 0.7rem
    }
    .header {
        font-size: 1.15rem;
        margin-top: 0.4rem;
    }
    h3{ color: rgb(231, 81, 43); font-size: 1.2rem; text-align: center;}
    .snippet {
        color: grey; font-family: 'Helvetica Neue'; text-align: center;
    }
    a{ text-decoration: none}
</style>
