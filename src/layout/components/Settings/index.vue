<template>
  <div class="drawer-container">
      系统设置
  </div>
</template>

<script>

export default {
  components: {  },
  data() {
    return {}
  },
  computed: {


  },
  methods: {
    themeChange(val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
