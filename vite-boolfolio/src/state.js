import {
    reactive
  } from 'vue'
  
  export const state = reactive({
    url: `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=barbie`,
    entries: null,
    info: null,
    error: null,
    path: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2",
    imgPath: "/src/assets/img/",
    searchText: "",
    searchCategory: "tv",
  })