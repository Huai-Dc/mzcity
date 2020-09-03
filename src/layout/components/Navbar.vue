<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <search id="header-search" class="right-menu-item" />

<!--        <error-log class="errLog-container right-menu-item hover-effect" />-->

        <screenfull id="screenfull" class="right-menu-item hover-effect" />

        <el-tooltip content="Global Size" effect="dark" placement="bottom">
          <size-select id="size-select" class="right-menu-item hover-effect" />
        </el-tooltip>

      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
<!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>Dashboard</el-dropdown-item>
          </router-link>
          <el-dropdown-item divided @click.native="logout">
            <span style="display:block;">Log Out</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import Search from '@/components/HeaderSearch'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    Screenfull,
    SizeSelect,
    Search
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      // this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    .navbar {
        height: 50px;
        overflow: hidden;
        position: relative;
        background: #fff;
        border-bottom: 1px solid #f1f1f1;
        .hamburger-container {
            line-height: 46px;
            height: 100%;
            float: left;
            cursor: pointer;
            transition: background 0.3s;
            -webkit-tap-highlight-color: transparent;

            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }

        .breadcrumb-container {
            float: left;
        }

        .errLog-container {
            display: inline-block;
            vertical-align: top;
        }

        .right-menu {
            float: right;
            height: 100%;
            line-height: 50px;

            &:focus {
                outline: none;
            }

            .right-menu-item {
                display: inline-block;
                padding: 0 8px;
                height: 100%;
                font-size: 18px;
                color: #5a5e66;
                vertical-align: text-bottom;

                &.hover-effect {
                    cursor: pointer;
                    transition: background 0.3s;

                    &:hover {
                        background: rgba(0, 0, 0, 0.025);
                    }
                }
            }

            .avatar-container {
                margin-right: 10px;

                .avatar-wrapper {
                    margin-top: 5px;
                    position: relative;
                    .user-name {
                        vertical-align: top;
                        font-size: 1rem;
                        margin-left: 5px;
                        margin-top: -4px;
                        display: inline-block;
                    }
                    .user-avatar {
                        cursor: pointer;
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                        vertical-align: text-bottom;
                    }

                    .el-icon-caret-bottom {
                        cursor: pointer;
                        position: absolute;
                        right: -20px;
                        top: 25px;
                        font-size: 12px;
                    }
                }
            }
        }
    }
    .el-badge {
        ::v-deep.el-badge__content.is-fixed {
            top: 10px;
        }
    }
    .msgs-title-content {
        color: #303133;
        font-size: 20px;
        line-height: 1;
        margin: 12px 0px 5px 0px;
        overflow: hidden;
        .msgs-title {
            margin-left: 20px;
            float: left;
        }
        .msgs-title-icon {
            float: right;
            margin-right: 28px;
        }
    }
    .avue-notice__item {
        padding: 12px 24px;
        border-bottom: 1px solid #e8eaec;
        cursor: pointer;
        -webkit-transition: background-color 0.2s ease-in-out;
        transition: background-color 0.2s ease-in-out;
        text-align: left;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
    }
    .avue-notice__content {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
    }
    .avue-notice__title {
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: #515a6e;
        margin-bottom: 4px;
        overflow: hidden;
    }
    .avue-notice__tag {
        float: right;
        margin-top: 2px;
    }
    .avue-notice__name {
        line-height: 25px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 280px;
        float: left;
    }
    .avue-notice__subtitle {
        font-size: 12px;
        color: #808695;
    }
    .avue-notice__more {
        text-align: center;
        padding: 20px 0 10px;
    }
</style>
