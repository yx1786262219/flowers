import axios from 'axios'
const state = {
    Title: '首页',
}

const mutations = {
    SetTitle(state, val) {
        document.title = val.res;
        state.Title = val.res;
    }
}

const actions = {
    SetTitle({
        commit,
        state
    }, title) {
        commit({
            type: 'SetTitle',
            res: title
        })
    }
}

export default {
    state,
    mutations,
    actions,
}