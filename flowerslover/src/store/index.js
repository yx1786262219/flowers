import Vue from 'vue'
import Vuex from 'vuex'

import PublicSetting from './modules/PublicSetting'
import unload from './modules/unload'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        PublicSetting,
        unload,
    }
})