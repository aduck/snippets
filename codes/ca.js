checkAll: {
  get () {
    return this.${1:list}.length && this.${1:list}.every(v => !!v.isCheck)
  },
  set (val) {
    this.${1:list}.forEach(v => v.isCheck = val)
  }
},