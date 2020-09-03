import defaultSettings from '@/settings'

const { showSettings, tagsView, fixedHeader, sidebarLogo } = defaultSettings

export default {
    namespaced: true,
    state: {
        language: "zh",
        theme: '#1890FF',
        tagsView: tagsView,
        showSettings: showSettings,
        fixedHeader: fixedHeader
    },
    mutations: {
        CHANGE_SETTING: (state, {key, value}) => {
            if(state.hasOwnProperty(key)) {
                state[key] = value
            }
        }
    },
    actions: {
        changeSetting({commit}, data){
            commit('CHANGE_SETTING', data)
        }
    }
}
