api.ajaxGateWay({
  url: '${1:url}',
  data: {
    $2
  },
  single: true,
  success: res => {
    if (res.error_num === 0) {
      $0
    } else {
      this.\$message.error(res.error_info)
    }
  }
})