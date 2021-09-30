import JokeResponse from '@/models/joke-response.interface'
import apiClient from './ApiClientService'

class JokeService {
  get (): Promise<JokeResponse> {
    return apiClient.get('/jokes/random')
  }
}

export default new JokeService()
