<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="isKeepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!isKeepAlive" />
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
const $route = useRoute();
// 是否使用keep-alive
const isKeepAlive = computed(() => $route?.meta?.keepAlive);

</script>
