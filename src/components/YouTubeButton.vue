<template>
        <div class="mt-4 mb-3 flex justify-between">
        <a
          :href="href"
          target="_blank"
          class="flex px-4 py-2 font-bold rounded-lg border-2 border-red-600 bg-red-600 text-white hover:bg-white hover:text-red-500 cursor-pointer transition-colors"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          Youtube</a
        >
      </div>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>
