search () {
  let params = {
    $2
  }
  api.ajaxGateWay({
    url: '${1:url}',
    data: params,
    single: true,
    showLoading: true,
    success: res => {
      if (res.error_num === 0) {
        $0
      } else {
        this.\$message.error(res.error_info)
      }
    }
  })
}