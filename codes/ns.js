async search() {
  let params = {
    mt: '${1:mt}',
    data: {$2},
    isLoading: true
  };
  let result = await this.\$axios.post(params);
  if (result[0].state.code !== 0) return this.\$message.error(result[0].state.msg);
  $0;
}