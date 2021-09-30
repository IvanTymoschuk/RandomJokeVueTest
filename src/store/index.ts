import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import JokeResponse from '@/models/joke-response.interface'
import JokeService from '@/services/JokeService'

Vue.use(Vuex)

interface State {
  joke: JokeResponse | null,
  errors: string[]
}

const state: State = {
  joke: null,
  errors: []
}

const getters = <GetterTree<State, any>>{
  getJoke (state) {
    return state.joke
  }
}

const mutations = <MutationTree<State>>{
  SET_JOKE (state: any, joke: JokeResponse) {
    state.joke = joke
  },
  SET_ERROR (state, error) {
    state.errors.push(error)
  }
}

const actions = <ActionTree<State, any>>{
  async getJoke ({ commit }) {
    try {
      const response = await JokeService.get()
      commit('SET_JOKE', response)
    } catch (error) {
      commit('SET_ERROR', error)
    }
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
