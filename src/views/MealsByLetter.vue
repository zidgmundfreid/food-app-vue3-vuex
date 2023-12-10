<template>
<div class="flex justify-center gap-2 mt-2">
    <router-link
      v-for="letter of letters"
      :key="letter"
      :to="{ name: 'byLetter', params: { letter } }"
      >{{ letter }}</router-link
    >
  </div>
    
</template>

<script setup>import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient.js"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref([])

onMounted(async () =>{
    const responce = await axiosClient.get('/list.php?i=list')
    ingredients.value = responce.data
})
</script>