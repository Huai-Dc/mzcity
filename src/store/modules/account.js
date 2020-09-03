import db from '@/utils/localstorage'
import { constantRoutes } from '@/router/index.js'

console.log(constantRoutes)
export default {
    namespaced: true,
    state: {
        user: {},
        token: '',
        routes: constantRoutes,
        permissions: [],
    },
    mutations: {
        SET_USER: (state, val) => {
            db.save('USER', val);
            state.user = val
        },
        SET_TOKEN: (state, val) => {
            db.save('TOKEN', val);
            state.token = val
        },
        SET_ROUTES: (state, val) => {
            db.save('USER_ROUTER', val);
            state.routes = constantRoutes.concat(val)
        },
        SET_PERMISSIONS: (state, val) => {
            db.save('PERMISSIONS', val);
            state.permissions = val
        }
    },
    actions: {
        generateRoutes({ commit }) {
            return new Promise( resolve => {
                commit('SET_ROUTERS',constantRoutes);
                resolve()
            })
        }
    }
}
