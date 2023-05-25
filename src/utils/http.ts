import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { toast } from 'react-toastify'
import { AuthResponse } from 'src/types/auth.type'
import { clearLS, getAccessTokenFromLS, saveAccessTokenToLS, saveProfileFromLS } from './auth'
import path from 'src/constants/path'
import config from 'src/constants/config'
class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    this.instance = axios.create({
      baseURL: config.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        // console.log(url)
        if (url === path.login || url === path.register) {
          const data = response.data as AuthResponse
          this.accessToken = (response.data as AuthResponse).data.access_token
          saveAccessTokenToLS(this.accessToken)
          saveProfileFromLS(data.data.user)
        } else if (url === path.logout) {
          this.accessToken = ''
          clearLS()
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status === HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          clearLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

class HTTP {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: config.bunURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}

export const http = new Http().instance
export const b_http = new HTTP().instance
