import redirectRouteTo from './route-redirect'

export default nuxtConfig => {
  const router = Reflect.has(nuxtConfig, 'router') ? nuxtConfig.router : {}
  const dashboard = Reflect.has(router, 'dashboard') ? router.dashboard : '/dashboard/projects'
  
  return {
    /**
     * 'render:setupMiddleware'
     * {@link node_modules/nuxt/lib/core/renderer.js}
     */
    setupMiddleware(app) {
      app.use('/dashboard', redirectRouteTo(dashboard))
    }
  }
}