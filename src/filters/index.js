import vue from 'vue'
vue.filter('numToString', function (value) {
  return value.toFixed(2)
})