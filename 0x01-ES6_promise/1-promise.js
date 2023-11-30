export default function getResponseFromAPI(success) {
  return new Promise((reslove, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    };
    if (success === true) {
      reslove(data);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
