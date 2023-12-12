<template>
     <router-link
      :to="{name: 'mealDetails', params: {id: meal.idMeal}}"
     
      class="bg-white shadow rounded-xl hover:scale-105 transition-transform overflow-hidden"
    >
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="rounded-t-xl w-full h-48 object-cover"
      />
      <h3 class="px-3 pt-3 font-bold">{{ meal.strMeal }}</h3>
      <p
        class="mb-2 p-3 h-14 font-light text-sm line-clamp-2 whitespace-normal break-words overflow-hidden overflow-ellipsis"
      >
        {{ meal.strInstructions }}
      </p>
      <YouTubeButton class="pl-3" :href="meal.strYoutube"/>
    </router-link>
</template>

<script setup>
import YouTubeButton from "../components/YouTubeButton.vue";
const {meal} = defineProps({
    meal: Object
})
</script>
