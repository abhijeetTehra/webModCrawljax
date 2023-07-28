import path from 'path';
import axios from 'axios';
import fs from 'fs'
import { fileURLToPath } from 'url';
import FormData from 'form-data';
import sharp from 'sharp';
import { extractImageMetadata } from './pi-utils.js';


export const detectImagesAndUpdateImageUrl = async (imageSrc, pageUrl)=>{
    
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const imageFileName = path.basename(imageSrc.split('"').join(''));
  const imagePath = path.join(__dirname, imageFileName);
  const response = await axios.get(pageUrl+imageSrc, { responseType: 'arraybuffer' });  
  fs.writeFileSync(imagePath, response.data);

  const imageMetadata= await extractImageMetadata(imagePath)

  let data = new FormData();
  
  if (fs.existsSync(imagePath)) {
    // console.log(imagePath)
    data.append("files", fs.createReadStream(imagePath))
  }

  let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/upload/multiple/designer/321ff654/321t654?filePathAccess=private&filePath=/Household&description=Household&overrideFile=true',
      headers: { 
        ...data.getHeaders()
      },
      data : data
  };
    
  const updatedUrl= await axios.request(config)
  .then((response) => {
    return(JSON.stringify(response.data[0].url));
  })
  .catch((error) => {
    console.log(error);
  });

  return {updatedUrl, imageMetadata}
}

export const uploadFile= async(fileUrl)=>{
  
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/upload/ssh/ssh/ssh/contentUrl?description=description&fileName=jazz&tags=tags&filePath=ssh&filePathAccess=PRIVATE&overrideFile=true&contentUrl=${fileUrl}`,
    headers: { }
  }
  
  try {
    const res=await axios.request(config)
    return (res.data.cdnUrl)
  } catch (error) {
    console.log(error);
  }

}
