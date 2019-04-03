api.asyncTask({
  start: {
    url: '${1:start_url}',   //此接口需要和后端约定，返回值必须是一个taskId
    data:{
      $2
    }
  },
  end: {
    url: '${3: end_url}',   //此url 也需要和后端约定， 传入的是 taskId，返回相应结果
    success: res => {
      if (res.error_num === 0) {
        $0
      } else {
        this.\$message.error(res.error_info)
      }
    }
  }
})