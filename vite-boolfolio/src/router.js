// 1 Import from vue-router createRouter and createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "./views/HomeView.vue"
import SingleProject from "./views/SingleProject.vue"
import ProjectCardsWrapper from "./views/projectCardsWrapper.vue"
import ViewMissingPage from "./views/ViewMissingPage.vue"
import ContactsView from "./views/ContactsView.vue"

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
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'viewMissingPage',
        component: ViewMissingPage
      },
      {
        path: '/contacts',
        name: 'contactsView',
        component: ContactsView
      },
  ]
})

// 3. export the router
export { router }