const headers = new Headers();
headers.append('Authorization', 'Bearer SOME-VALUE');

fetch('https://authinmern.free.beeceptor.com', {
    method: 'GET',
    headers: headers,
  })
  .then(response => response.text())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });