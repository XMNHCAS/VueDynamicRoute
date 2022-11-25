<template>
    <h1>Page One</h1>
    <button @click="handleClick">Home</button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const handleClick = () => router.push({ path: '/Home' })
</script>