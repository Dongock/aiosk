import Vue from "vue";
import Vuex from "vuex";

import getters from './getters'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    selected:{},
    cart:[],
    phoneNumber:'',
    payList:[],
<<<<<<< HEAD
    senior: false,
=======
    payDict: {},
    senior: true,
>>>>>>> 036df3baa4d4ddbeee73bdb37d67032ad9f04bfa
    seniormodal: true,
    age: '',
    letter: '',
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
