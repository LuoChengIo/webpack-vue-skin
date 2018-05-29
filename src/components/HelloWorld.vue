<template>
  <div class="">
    <div class="head head-nav">
      头部哦
    </div>
    <div class="box-center box-bg">
      <h5>切换主题\(^o^)/~</h5>
      <ul>
        <li v-for="(item,index) in themeArr" :class="{'active':activeItem === item}" @click="changeTheme(item)">{{item}}</li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      themeArr: ['one', 'two', 'three', 'four'],
      activeItem: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.activeItem = localStorage.getItem('themeActive') || 'one'
  },
  methods: {
    changeTheme(item) {
      this.activeItem = item
      localStorage.setItem('themeActive', item)
      document.getElementById('themeLink').href = `./static/theme/stylesheets/${item}/index.css`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
 .head{
   padding: 25px 0;
   line-height: 30px;
   font-size: 14px;
   text-align: center;
 }
 .box-center{
   position: absolute;
   top: 50%;
   left: 50%;
   padding: 30px;
   transform: translate(-50%,-50%);
   border-radius: 2px;
   font-size: 0;
   box-shadow: 1px 1px 30px  rgba($color: #000000, $alpha: .3);
   h5{
     font-size: 16px;
     color: #666;
     margin-bottom: 10px;
   }
   ul{
     width: 220px;
     margin-right: -10px;
     margin-bottom: -10px;
   }
   li{
      display: inline-block;
      width: 100px;
      height: 40px;
      margin:0 10px 10px 0;
      line-height: 40px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      background-color: rgba(0,0,0,.5);
      &.active{
        background-color: #5965e7;
      }
   }
 }
</style>
