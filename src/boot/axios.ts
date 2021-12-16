import { boot } from 'quasar/wrappers'
import axios, { AxiosInstance, AxiosResponse } from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  method: 'POST',
  baseURL: '/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000
})

const post = async <T, R> (url: string, data: T) => {
  let response: AxiosResponse<R>

  try {
    response = await api.post<T, AxiosResponse<R>>(url, data)
  } catch {
    throw new Error('-2')
  }

  if (response && response.status === 200 && response.data) {
    return response.data
  }

  // TODO handle error
  throw new Error('')
}

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { post }
