const db = {
    save(key, value) {
        let projectName = process.env.VUE_APP_PROJECT_NAME;
        localStorage.setItem(projectName + '_' + key, JSON.stringify(value));
    },
    get(key, defaultValue = {}) {
        let projectName = process.env.VUE_APP_PROJECT_NAME;
        try {
            return JSON.parse(localStorage.getItem(projectName + '_' + key)) || defaultValue;
        } catch (err) {
            return defaultValue;
        }
    },
    remove(key) {
        let projectName = process.env.VUE_APP_PROJECT_NAME;
        localStorage.removeItem(projectName + '_' + key);
    },
    clear() {
        // 清除缓存时，需要区分来

        let projectName = process.env.VUE_APP_PROJECT_NAME;
        for (const key in localStorage) {
            if (key.indexOf(projectName) !== -1) {
                localStorage.removeItem(key);
            }
        }
    },
};

export default db;
