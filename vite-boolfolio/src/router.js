// 1 Import from vue-router createRouter and createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import ProjectCards from "./components/ProjectCards.vue"
import HomeView from "./views/HomeView.vue"
import SinglePost from "./views/SinglePost.vue"
import esempio from "./views/esempio.vue"

// 2 define routes
const router = createRouter({
  history: createWebHistory(),
    routes: [
        {
         path: '/',
         name: 'home',
         component: HomeView
       },
       {
        path: '/projects/:slug',
        name: 'single-post',
        component: SinglePost
      },
      {
        path: '/esempio',
        name: 'esempio',
        component: esempio
      },
  ]
})

// 3. export the router
export { router }