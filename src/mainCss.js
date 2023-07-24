const axios = require('axios');
const fs = require('fs');

// URL of the website and the main.css file
const websiteUrl = 'http://aidtaas.com'; // Replace this with the URL of the website
const cssUrl = `${websiteUrl}/static/css/main.6b829f93.css`; // Replace this with the actual path to the main.css file

// Function to download the main.css file
async function downloadMainCSS() {
  try {
    const response = await axios.get(cssUrl, { responseType: 'arraybuffer' });
    const cssContent = response.data;

    // Write the downloaded CSS content to a local file
    fs.writeFile('main1.css', cssContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('main.css file has been downloaded successfully!');
      }
    });
  } catch (error) {
    console.error('Error downloading main.css:', error.message);
  }
}

// Call the download function
downloadMainCSS();