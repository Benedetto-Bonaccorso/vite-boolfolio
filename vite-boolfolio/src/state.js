import {
    reactive
  } from 'vue'
  
  export const state = reactive({
    url: `http://127.0.0.1:8000/api/projects`,
    baseUrl: `http://127.0.0.1:8000`,
    currentUrl: null,
    entries: null,
    info: null,
    error: null,
    maxPage: null,
    technologies: ["HTML", "CSS", "JavaScript", "VueJs", "Vite", "PHP", "Laravel", "MySql"]
  })