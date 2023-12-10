<template>
  <div class="flex p-8">
    <input
      v-model="keyword"
      @change="searchMeals"
      type="text"
      placeholder="Search for Meals"
      class="w-full rounded border-2 border-gray-200"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div v-for="meal of meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <img :src="meal.strMealThumb" :alt="strMeal" class="rounded-t-xl w-full h-48 object-cover" />
      <h3 class="px-3 pt-3 font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-2 p-3 h-10  text-ellipsis overflow-hidden whitespace-nowrap">{{ meal.strInstructions }}</p>
      <div class="p-3 mb-3 flex justify-between">
        <a :hreg="meal.strYoutube" target="_blank" class="px-3 py-2 rounded border-2 border-red-600 hover:bg-red-500 hover:text-white cursor-pointer">Youtube</a
        ><router-link class="px-6 py-2 rounded border-2 border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-500 cursor-pointer" :to="'/'" target="_blank">View</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import store from "../store";

const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
</script>