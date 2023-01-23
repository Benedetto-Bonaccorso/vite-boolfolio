import {
    reactive
  } from 'vue'
  
  export const state = reactive({
    url: `http://127.0.0.1:8000/api/projects`,
    currentUrl: null,
    entries: null,
    info: null,
    error: null,
    maxPage: null,
  })