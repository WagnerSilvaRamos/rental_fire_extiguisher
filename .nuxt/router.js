import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6865492c = () => interopDefault(import('..\\pages\\my-items.vue' /* webpackChunkName: "pages/my-items" */))
const _3114f89e = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages/products/index" */))
const _057a834e = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages/products/_id" */))
const _477b40d5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/my-items",
    component: _6865492c,
    name: "my-items"
  }, {
    path: "/products",
    component: _3114f89e,
    name: "products"
  }, {
    path: "/products/:id",
    component: _057a834e,
    name: "products-id"
  }, {
    path: "/",
    component: _477b40d5,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
