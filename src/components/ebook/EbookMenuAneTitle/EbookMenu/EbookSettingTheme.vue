<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 1">
      <div class="setting-theme">
        <div class="setting-theme-item" v-for="(item, index) in themeList" :key="index" @click="setTheme(index)">
          <div class="preview"
          :style="{background: item.style.body.background}"
          :class="{'selected': item.name === defaultTheme}"></div>
          <div class="text" :class="{'selected': item.name === defaultTheme}">{{item.alias}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../../../utils/mixin.js'
  import { setBookObject } from '../../../../utils/localStorage.js'
  export default {
    mixins: [ebookMixin],
    methods: {
      setTheme(index) {
        const theme = this.themeList[index]
        this.setDefaultTheme(theme.name).then(() => {
          this.currentBook.rendition.themes.register(theme.name, theme.style)
          this.currentBook.rendition.themes.select(this.defaultTheme)
          this.initClobalStyle()
        })
        setBookObject(this.fileName, 'defaultTheme', this.defaultTheme)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
  @import "../../../../assets/styles/global";
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(47);
    left: 0;
    z-index: 130;
    width: 100%;
    height: px2rem(80);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    .setting-theme {
      height: 100%;
      display: flex;
      .setting-theme-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: px2rem(5);
        box-sizing: border-box;
        .preview {
          flex: 1;
          border: px2rem(1) solid #ccc;
          box-sizing: border-box;
          &.selected {
            box-shadow: 0 px2rem(4) px2rem(6) 0 rgba(0, 0, 0, .1);
          }
          &.no-border {
            border: none;
          }
        }
        .text {
          flex: 0 0 px2rem(20);
          font-size: px2rem(14);
          color: #ccc;
          @include center;
          &.selected {
            color: #333;
          }
        }
      }
    }
  }
</style>
