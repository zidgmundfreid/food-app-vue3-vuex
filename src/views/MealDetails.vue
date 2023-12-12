<template>
  <div class="gap-5 grid grid-cols-1 md:grid-cols-2 m-5 w-[800px] mx-auto">
    <div ><h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img
      :src="meal.strMealThumb"
      :alt="meal.strMeal"
      class="w-full object-cover"
    /></div>
    <div><div class="grid grid-cols-1 md:grid-cols-3 mb-4 mt-4">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div>
        <strong class="font-bold">Tags:</strong>
        {{ meal.strTags === null ? "empty" : meal.strTags }}
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template :key="el" v-for="(el, idx) of new Array(20)">
            <li v-if="meal[`strIngredient${idx + 1}`]">
              {{ idx + 1 }}. {{ meal[`strIngredient${idx + 1}`] }}
            </li></template
          >
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold">Measures</h2>
        <ul>
          <template :key="el" v-for="(el, idx) of new Array(20)">
            <li v-if="meal[`strMeasure${idx + 1}`]">
              {{ meal[`strMeasure${idx + 1}`] }}
            </li></template
          >
        </ul>
      </div>
     
     
    </div>
    <div class="my-4"><p>{{ meal.strInstructions }}</p></div>
    <YouTubeButton class="mb-10" :href="meal.strYoutube"/>
    <div class="text-transparent">$nbsp;</div></div>
    
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});



onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
  
});


</script>
