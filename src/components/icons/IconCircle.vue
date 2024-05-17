<template>
  <div class="icon-circle-block">
    <div :class="'icon-circle ' + classes" v-html="svgContent"></div>
    <div class="bottom-circle"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({
  icon: {
    required: true,
    type: String
  },
  classes: {
    required: false,
    type: String,
    default: 'stroke'
  }
})

const svgContent = ref('')

onMounted(() => {
  axios
    .get(props.icon, {
      headers: {
        'Content-Type': 'image/svg+xml'
      }
    })
    .then((response) => {
      svgContent.value = response.data
    })
    .catch((error) => {
      console.error('Error loading SVG file:', error)
    })
})
</script>
