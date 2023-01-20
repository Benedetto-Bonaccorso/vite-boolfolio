// 1 Import from vue-router createRouter and createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import ProjectCards from "./components/ProjectCards.vue"
import HomeView from "./views/HomeView.vue"
import SingleProject from "./views/SingleProject.vue"
import ProjectCardsWrapper from "./views/projectCardsWrapper.vue"

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
        name: 'single-project',
        component: SingleProject
      },
      {
        path: '/projectCardsWrapper',
        name: 'projectCardsWrapper',
        component: ProjectCardsWrapper
      }
  ]
})

// 3. export the router
export { router }