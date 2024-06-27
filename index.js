const fetch = async (url) => {
  const {default: fetch} = await import('node-fetch');
  return fetch(url);
};

const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => res.json)
    .then(data => {
        console.log("Data fetched successfully:", data);
    })
    .catch(error => {
      console.error("Error fetching data:", error)
    });
