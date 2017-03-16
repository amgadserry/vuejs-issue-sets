import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/login.vue'
import AdminPanel from '@/layouts/AdminPanel.vue'
import TeamManagmentLayout from '@/layouts/TeamManagementLayout.vue'
import Page404 from '@/pages/404.vue'
import Grid from '@/pages/Team-Grid/Grid.vue'
import Graph from '@/pages/Team-Graph/Graph.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminPanel,
      children: [
        {
          path: 'team',
          name: 'Team',
          component: TeamManagmentLayout,
          children: [
            {
              path: 'grid',
              name: 'Grid',
              component: Grid
            },
            {
              path: 'graph',
              name: 'Graph',
              component: Graph
            }
          ]
        }
      ]
    },
    {
      path: '*',
      name: 'page404',
      component: Page404
    }
  ]
})
