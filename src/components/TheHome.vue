<template>
  <div>主页内容</div>
</template>

<script>
export default {
  name: 'TheHome',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style >
</style>
