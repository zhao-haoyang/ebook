<template>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 2">
      <div class="setting-progress">
        <div class="read-time-wrapper">
          <span class="read-time-text">{{getReadTimeText(fileName)}}</span>
          <span class="icon-zuo1"></span>
        </div>
        <div class="progress-wrapper">
          <div class="progress-icon-wrapper" @click="prevSection()">
            <span class="icon-zuo"></span>
          </div>
          <input class="progress" type="range"
            max="100"
            min="0"
            step="1"
            @change="onProgressChange($event.target.value)"
            @input="onProgressInput($event.target.value)"
            :value="progress"
            :disabled="!bookAvailable"
            ref="progress">
          <div class="progress-icon-wrapper" @click="nextSection()">
            <span class="icon-zuo1"></span>
          </div>
        </div>
        <div class="text-wrapper">
          <span class="progress-section-text">{{getSectionName}}</span>
          <span>({{bookAvailable ? progress + '%' : '加载中...'}})</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../../../utils/mixin.js'
  export default {
    mixins: [ebookMixin],
    methods: {
      // 进度线变换（指在进度线上滑动）
      onProgressChange(progress) {
        this.setProgress(progress).then(() => {
          this.displayProgress()
          this.upDateProgressBg()
        })
      },
      // 进度线改动 （指点击进度线，使进度线直接改动）
      onProgressInput(progress) {
        this.setProgress(progress).then(() => {
          this.displayProgress()
          this.upDateProgressBg()
        })
      },
      // 展示进度对应页面
      displayProgress() {
        const cfi = this.currentBook.locations.cfiFromPercentage(this.progress / 100)
        this.display(cfi)
      },
      // 设置进度线背景
      upDateProgressBg() {
        this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
      },
      // 章节页面展示
      displaySection() {
        // 获得当前章节位置的页面
        const sectionInfo = this.currentBook.section(this.section)
            if (sectionInfo && sectionInfo.href) {
              this.display(sectionInfo.href)
            }
      },
      // 上一章节
      prevSection() {
        if (this.section > 0 && this.bookAvailable) {
          this.setSection(this.section - 1).then(() => {
            this.displaySection()
          })
        }
      },
      // 下一章节
      nextSection() {
        if (this.currentBook.spine.length - 1 && this.bookAvailable) {
          this.setSection(this.section + 1).then(() => {
            this.displaySection()
          })
        }
      }
    },
    updated() {
      this.upDateProgressBg()
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
  @import "../../../../assets/styles/global";
  .setting-wrapper{
    position: absolute;
    bottom: px2rem(47);
    left: 0;
    z-index: 130;
    width: 100%;
    height: px2rem(90);
    background: white;
    box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
    .setting-progress {
      position: relative;
      width: 100%;
      height: 100%;
      .read-time-wrapper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: px2rem(40);
        font-size: px2rem(12);
        @include center;
      }
      .progress-wrapper {
        width: 100%;
        height: 100%;
        @include center;
        padding: 0 px2rem(15);
        box-sizing: border-box;
        .progress-icon-wrapper{
          font-size: px2rem(20);
        }
        .progress {
          width: 100%;
          -webkit-appearance: none;
          height: px2rem(2);
          margin: 0 px2rem(15);
          &:focus {
            outline: none;
          }
          &::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: px2rem(20);
            width: px2rem(20);
            border-radius: 50%;
            background: white;
            box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .15);
            border: px2rem(1) solid #ddd;
          }
        }
      }
      .text-wrapper {
        position: absolute;
        left: 0;
        bottom: px2rem(10);
        width: 100%;
        color: #333;
        font-size: px2rem(12);
        padding: 0 px2rem(15);
        box-sizing: border-box;
        @include center;
        .progress-section-text {
          @include ellipsis;
        }
      }
    }
  }
</style>
