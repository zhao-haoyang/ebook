<template>
  <div class="shelf-footer" v-show="isEditMode">
    <div class="shelf-footer-tab-wrapper"
      v-for="item in tabs" :key="item.index"
      @click="onTabClick(item)">
      <div class="shelf-footer-tab"
        :class="{'is-selected': isSelected}">
        <div class="tab-icon"
          :class="{
          'icon-private': item.index === 1 && !isPrivate,
          'icon-private-see': item.index === 1 && isPrivate,
          'icon-download-remove': item.index === 2 && isDownload,
          'icon-download': item.index === 2 && !isDownload,
          'icon-move': item.index === 3,
          'icon-shelf': item.index === 4}"></div>
        <div class="tab-text" :class="{'remove-text': item.index === 4}">{{label(item)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import { saveBookShelf, removeLocalStorage } from '../../utils/localStorage.js'
  import { storeShelfMixin } from '../../utils/mixin.js'
  import { download } from '../../api/store.js'
  import { removeLocalForage } from '../../utils/localForage.js'
  export default {
    mixins: [storeShelfMixin],
    computed: {
      isPrivate() {
        if (!this.shelfSelected) {
          return false
        } else {
          return this.shelfSelected.every(item => item.private)
        }
      },
      isSelected() {
        return this.shelfSelected && this.shelfSelected.length > 0
      },
      tabs() {
        return [
          {
            label: this.$t('shelf.private'),
            label2: this.$t('shelf.noPrivate'),
            index: 1
          },
          {
            label: this.$t('shelf.download'),
            label2: this.$t('shelf.delete'),
            index: 2
          },
          {
            label: this.$t('shelf.move'),
            index: 3
          },
          {
            label: this.$t('shelf.remove'),
            index: 4
          }
        ]
      },
      isDownload() {
        if (!this.shelfSelected) {
          return false
        } else {
          return this.shelfSelected.every(item => item.cache)
        }
      }
    },
    data() {
      return {
        popupMenu: null
      }
    },
    methods: {
      async downloadSelectedBook() {
        for (let i = 0; i < this.shelfSelected.length; i++) {
          await this.downloadBook(this.shelfSelected[i]).then(book => {
            book.cache = true
          })
          saveBookShelf(this.shelfList)
        }
      },
      downloadBook(book) {
        let text = ''
        const toast = this.toast({
          text
        })
        toast.continueShow()
        return new Promise((resolve, reject) => {
          download(book, () => {
            toast.remove()
            resolve(book)
          }, reject, progressEvent => {
            const progress = Math.floor(progressEvent.loaded / progressEvent.total * 100) + '%'
            text = this.$t('shelf.progressDownload').replace('$1', `${book.fileName}.epub(${progress})`)
            toast.updateText(text)
          })
        })
      },
      onComplete() {
        this.hidePopup()
        this.setIsEditMode(false)
        saveBookShelf(this.shelfList)
      },
      removeSelectedBook() {
        Promise.all(this.shelfSelected.map(book => this.removeBook(book)))
          .then(books => {
            books.map(book => {
              book.cache = false
            })
            saveBookShelf(this.shelfList)
            this.simpleToast(this.$t('shelf.removeDownloadSuccess'))
          })
      },
      removeBook(book) {
        return new Promise((resolve, reject) => {
          removeLocalStorage(`${book.categoryText}/${book.fileName}-info`)
          removeLocalForage(`${book.fileName}`)
          resolve(book)
        })
      },
      hidePopup() {
        this.popupMenu.hide()
      },
      setPrivate() {
        let isPrivate
        if (this.isPrivate) {
          isPrivate = false
        } else {
          isPrivate = true
        }
        this.shelfSelected.forEach(book => {
          book.private = isPrivate
        })
        this.onComplete()
        if (isPrivate) {
          this.simpleToast(this.$t('shelf.setPrivateSuccess'))
        } else {
          this.simpleToast(this.$t('shelf.closePrivateSuccess'))
        }
      },
      async setDownload() {
        this.onComplete()
        if (this.isDownload) {
          this.removeSelectedBook()
        } else {
          await this.downloadSelectedBook()
          this.simpleToast(this.$t('shelf.setDownloadSuccess'))
        }
      },
      removeSelected() {
        this.shelfSelected.forEach(selected => {
          this.setShelfList(this.shelfList.filter(book => {
            if (book.itemList) {
              book.itemList = book.itemList.filter(itemBook => itemBook.fileName !== selected.fileName)
              return book
            }
            return book
          }))
        })
        this.setShelfSelected([])
        this.onComplete()
      },
      label(item) {
        switch (item.index) {
          case 1: return this.isPrivate ? item.label2 : item.label
          case 2: return this.isDownload ? item.label2 : item.label
          default: return item.label
        }
      },
      onTabClick(item) {
        if (!this.isSelected) {
          return ''
        }
        switch (item.index) {
          case 1: this.showPrivate()
            break
          case 2: this.showDownload()
            break
          case 3: this.dialog().show()
            break
          case 4: this.showRemove()
            break
          default:
            break
        }
      },
      showPrivate() {
        this.popupMenu = this.popup({
          title: this.isPrivate ? this.$t('shelf.closePrivateTitle') : this.$t('shelf.setPrivateTitle'),
          btn: [
            {
              text: this.isPrivate ? this.$t('shelf.close') : this.$t('shelf.open'),
              click: () => {
                this.setPrivate()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      },
      showDownload() {
        this.popupMenu = this.popup({
          title: this.isDownload ? this.$t('shelf.removeDownloadTitle') : this.$t('shelf.setDownloadTitle'),
          btn: [
            {
              text: this.isDownload ? this.$t('shelf.delete') : this.$t('shelf.open'),
              click: () => {
                this.setDownload()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      },
      showRemove() {
        let title
        if (this.shelfSelected.length === 1) {
          title = this.$t('shelf.removeBookTitle').replace('$1', `《${this.shelfSelected[0].title}》`)
        } else {
          title = this.$t('shelf.removeBookTitle').replace('$1', this.$t('shelf.selectedBooks'))
        }
        this.popupMenu = this.popup({
          title: title,
          btn: [
            {
              text: this.$t('shelf.removeBook'),
              type: 'danger',
              click: () => {
                this.removeSelected()
              }
            },
            {
              text: this.$t('shelf.cancel'),
              click: () => {
                this.hidePopup()
              }
            }
          ]
        }).show()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .shelf-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 120;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background-color: white;
    box-shadow: 0 px2rem(-2) px2rem(4) 0 rgba(0, 0, 0, .1);
    .shelf-footer-tab-wrapper {
      @include center;
      width: 25%;
      height: 100%;
      flex: 1 1 auto;
      .shelf-footer-tab {
        width: 100%;
        height: 100%;
        opacity: .5;
        @include columnCenter;
        .tab-icon {
          font-size: px2rem(20);
          color: #666;
        }
        .icon-shelf {
          color: $color-pink;
        }
        .tab-text {
          margin-top: px2rem(5);
          font-size: px2rem(12);
          color: #666;
          &.remove-text {
            color: $color-pink;
          }
        }
        &.is-selected {
          opacity: 1;
        }
      }
    }
  }
</style>
