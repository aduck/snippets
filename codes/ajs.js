api.ajaxGateWay({
  url: [$1],
  data: [
    $2
  ],
  single: true,
  success: res => {
    let errors = res.filter(({error_num}) => error_num !== 0)
    if (!errors.length) {
      $0
    } else {
      this.\$message.error(errors.map(({error_info}) => error_info).join(','))
    }
  }
})