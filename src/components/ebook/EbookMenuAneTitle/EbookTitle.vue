<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left" @click="back">
        <span class="icon-zuo"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shucheng"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-qicheqianlian-select"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-gengduo"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../../utils/mixin.js'
  export default {
    mixins: [ebookMixin],
    methods: {
      back() {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped="scoped">
  @import "../../../assets/styles/global.scss";
  .title-wrapper{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 130;
    display: flex;
    width: 100%;
    height: px2rem(48);
    background: white;
    box-shadow: 0 px2rem(8) px2rem(8) rgba(0,0,0, .15);
    font-size: px2rem(20);
    .left{
      flex: 0 0 px2rem(60);
      @include center;
    }
    .right{
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex:0 0 px2rem(40);
        @include center;
        .icon-shucheng {
          font-size: px2rem(24);
        }
        .icon-qicheqianlian-select {
          font-size: px2rem(24);
        }
      }
    }
  }
</style>
