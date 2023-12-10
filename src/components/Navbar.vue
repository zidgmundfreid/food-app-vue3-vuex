<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5"
      >Home</router-link
    >
    <div class="flex items-center justify-center qap-1">
      <router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byName', params: '' }"
        >Meals By Name</router-link
      ><router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byLetter' }"
        >Meals By Letter</router-link
      ><router-link
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
        :to="{ name: 'byIngredients' }"
        >Meals By Ingredients</router-link
      >
    </div>
  </header>
</template>

<script setup></script>