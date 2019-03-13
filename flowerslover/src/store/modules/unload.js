import Ajax from '../../plugins/Ajax'

const state = {

}

const mutations = {

}

const actions = {
    CheckUser (Obj, Option) {
        if (!Option) {
            Option = {}
        }
        var data = {
            username: Option.username,
            password: Option.password,
        }
        Ajax.Post('/CheckUser', data, function(res) {
            if (Option.success) {
                Option.success(res);
            }
        })
    }
}

export default {
    state,
    mutations,
    actions
}
