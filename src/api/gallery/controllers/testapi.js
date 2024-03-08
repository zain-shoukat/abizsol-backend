// const fetch = require('node-fetch');


fetch('https://your-strapi-server.com/api/gallery')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const imageUrl = item.image.url;
      console.log('Image URL:', imageUrl);
    });
  })
  .catch(error => console.error('Error fetching gallery data:', error));
