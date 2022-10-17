export function RequestHTTP(authkey: string, url_prex: string, url: string, data: string, retry_count: number = 0) {
  const requestUriString = `${url_prex}${url}`;

  fetch(requestUriString, {
    method: 'POST', // 또는 'PUT'
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'token': authkey,
      'charset': 'UTF-8',
    },
    body: data,
  })
    .then((response) => {})
    .catch((error) => {
      console.error('실패:', error);
    });
}

export function getAuthKey(authKey: string) {
  return authKey;
}
