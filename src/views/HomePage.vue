<template>
    <h1>Home</h1>
    <div style="display: flex;gap:20px">
        <button v-for="item in routes" @click="handleClick(item.path)"> {{ item.name }}</button>
    </div>
</template>

<script lang="ts" setup>
import { useStore } from "../store";
import { TestApi, GetDynamicRoutes } from '../apis'
import { useRouter } from 'vue-router'
import { computed } from "@vue/reactivity";
import { onMounted } from "vue";

const router = useRouter()
const store = useStore()

// 动态路由表
const routes = computed(() => store.routes)

// 路由按钮点击事件
const handleClick = (path: string) => {
    router.push({ path })
}

onMounted(() => {
    if (store.routes.length < 1) {
        // 获取动态路由
        GetDynamicRoutes().then(res => {
            store.addRoutes(res.data.data, router)
        })      
    }

     // 测试接口
     TestApi().then(res => console.log(res.data)).catch(err => console.log(err))
})
</script>