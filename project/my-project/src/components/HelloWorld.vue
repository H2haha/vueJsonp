<template>
  <div class="hello">
      <h1>跨域请求demo</h1>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
  </div>
</template>

<script>
  var jsonp = require('jsonp');
export default {
  name: 'HelloWorld',
    //跨域的jsonp请求
  created: function() {
let that = this
jsonp('https://api.douban.com/v2/book/1220562', null, function (err, data) {
if (err) {
console.error(err.message);
} else {
that.newsList=data.tags
}});
}, 
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      newsList: [],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
