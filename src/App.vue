<template>
  <div id="app">
    <button @click="onClick">111111111111111111</button>
    <button @click="onRefresh">刷新</button>
    <div>
      el ewrehkwrewhrhjkf dsfhdjskhfjkdshf
      <div>
        weijfdhfjdhf ele sdfhsdjgfk gwer
        <div>12333 <span>232323</span>el <span>23232323233</span></div>
      </div>
    </div>
  </div>
</template>

<script>
import highlight from './highlight'

export default {
  name: 'app',

  data() {
    return {
      value: '00000'
    }
  },

  methods: {
    onClick() {
      const searchRoot = this.$el
      highlight(searchRoot, 'el', 1)
    },

    onRefresh() {
      this.value = '111111111'
    }
  }
}
</script>

<style>
.open-search-highlight {
  background-color: red;
}
</style>
