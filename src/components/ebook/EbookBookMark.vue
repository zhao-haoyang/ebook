<template>
  <div class="ebook-bookmark" ref="bookmark">
    <div class="ebook-bookmark-text-wrapper">
      <div class="ebook-bookmark-down-wrapper" ref="iconDown">
        <span class="icon-uniE911"></span>
      </div>
      <div class="ebook-bookmark-text">{{text}}</div>
    </div>
    <div class="ebook-bookmark-icon-wrapper" :style="isFixed ? fixedStyle : {}">
      <bookmark :color="color" :height="35" :width="20"></bookmark>
    </div>
  </div>
</template>

<script>
  import { realPx } from '../../utils/utils.js'
  import Bookmark from '../common/Bookmark.vue'
  import { ebookMixin } from '../../utils/mixin.js'
  import { getBookmark, saveBookmark } from '../../utils/localStorage.js'
  const BLUE = '#346cbc'
  const WHITE = '#fff'
  export default {
    mixins: [ebookMixin],
    components: {
      Bookmark
    },
    computed: {
      height() {
        return realPx(35)
      },
      threshold() {
        return realPx(55)
      },
      fixedStyle() {
        return {
          position: 'fixed',
          top: 0,
          right: `${(window.innerWidth - this.$refs.bookmark.clientWidth) / 2}px`
        }
      }
    },
    watch: {
      offsetY(v) {
        if (!this.bookAvailable || this.menuVisible || this.settingVisible >= 0) {
          return
        }
        if (v >= this.height && v < this.threshold) {
          this.beforeThreshold(v)
        } else if (v >= this.threshold) {
          this.afterThreshold(v)
        } else if (v > 0 && v < this.height) {
          this.beforeHeight()
        } else if (v === 0) {
          this.restore()
        }
      },
      isBookmark(isBookmark) {
        this.isFixed = isBookmark
        if (isBookmark) {
          this.color = BLUE
        } else {
          this.color = WHITE
        }
      }
    },
    data() {
      return {
        text: '',
        color: WHITE,
        isFixed: false
      }
    },
    methods: {
      addBookmark() {
        this.bookmark = getBookmark(this.fileName)
        if (!this.bookmark) {
          this.bookmark = []
        }
        const currentLocation = this.currentBook.rendition.currentLocation()
        const cfibase = currentLocation.start.cfi.replace(/!.*/, '')
        const cfistart = currentLocation.start.cfi.replace(/.*!/, '').replace(/\)$/, '')
        const cfiend = currentLocation.end.cfi.replace(/.*!/, '').replace(/\)$/, '')
        const cfirange = `${cfibase}!,${cfistart},${cfiend})`
        this.currentBook.getRange(cfirange).then(range => {
          const text = range.toString().replace(/\s\s/g, '')
          this.bookmark.push({
            cfi: currentLocation.start.cfi,
            text: text
          })
          saveBookmark(this.fileName, this.bookmark)
        })
      },
      removeBookmark() {
        const currentLocation = this.currentBook.rendition.currentLocation()
        const cfi = currentLocation.start.cfi
        this.bookmark = getBookmark(this.fileName)
        if (this.bookmark) {
          saveBookmark(this.fileName, this.bookmark.filter(item => item.cfi !== cfi))
          this.setisBookmark(false)
        }
      },
      restore() {
        // 状态4，归位
        setTimeout(() => {
          this.$refs.bookmark.style.top = `${-this.height}px`
          this.$refs.iconDown.style.transform = ''
        }, 200)
        if (this.isFixed) {
          this.setisBookmark(true)
          this.addBookmark()
        } else {
          this.setisBookmark(false)
          this.removeBookmark()
        }
      },
      beforeHeight() {
        // 状态1，未超过书签高度
        if (this.isBookmark) {
          this.text = this.$t('book.pulldownDeleteMark')
          this.color = BLUE
          this.isFixed = true
        } else {
          this.text = this.$t('book.pulldownAddMark')
          this.color = WHITE
          this.isFixed = false
        }
      },
      beforeThreshold(v) {
        // 状态2，未到达临界状态
        this.$refs.bookmark.style.top = `${-v}px`
        this.beforeHeight()
        // 图标旋转
        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === 'rotate(180deg)') {
          iconDown.style.transform = ''
        }
      },
      afterThreshold(v) {
        // 状态3，超越临界状态
        this.$refs.bookmark.style.top = `${-v}px`
        if (this.isBookmark) {
          this.text = this.$t('book.releaseDeleteMark')
          this.color = WHITE
          this.isFixed = false
        } else {
          this.text = this.$t('book.releaseAddMark')
          this.color = BLUE
          this.isFixed = true
        }
        // 图标旋转
        const iconDown = this.$refs.iconDown
        if (iconDown.style.transform === '') {
          iconDown.style.transform = 'rotate(180deg)'
        }
      }
    }
  }
</script>

<style scoped="scoped" lang="scss" rel='stylesheet/scss'>
  @import "../../assets/styles/global.scss";
  .ebook-bookmark {
    position: absolute;
    top: px2rem(-35);
    left: 0;
    z-index: 120;
    width: 100%;
    height: px2rem(35);
    background-color: skyblue;
    .ebook-bookmark-text-wrapper {
      position: absolute;
      right: px2rem(45);
      bottom: 0;
      display: flex;
      .ebook-bookmark-down-wrapper {
        font-size: px2rem(14);
        color: white;
        transition: all .2s linear;
        @include center;
      }
      .ebook-bookmark-text {
        font-size: px2rem(14);
        color: white;
      }
    }
    .ebook-bookmark-icon-wrapper {
      position: absolute;
      right: 0;
      bottom: 0;
      margin-right: px2rem(15);
    }
  }
</style>
