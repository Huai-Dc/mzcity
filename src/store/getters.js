import account from "@/store/modules/account";

export default {
    sidebar: state => state.app.sidebar,
    size: state => state.app.size,
    device: state => state.app.device,
    routes: state => state.account.routes
}
