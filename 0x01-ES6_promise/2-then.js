export default function getResponseFromAPI(promise) {
  return promise
    .then(() => ({
      status: 200,
      body: 'success',
    }))
    .catch(() => {})
    .finally(() => {
      console.log('Got a response from the API');
    });
}
