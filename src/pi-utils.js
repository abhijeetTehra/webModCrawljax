import { jwtToken } from "./constant.js";
import { URL } from "url";
import { detectImagesAndUpdateImageUrl } from "./cms-utils.js";
import axios from "axios";
import sharp from "sharp";
import {
  extractParentPageUrl,
  generateUniqueId,
  resolveToUrl,
} from "./ui-utils.js";
import fs from "fs";
import { downloadAndUploadFile, postJSON } from "./http.js";
import {
  CREATE_SCHEMA_INSTANCES_URL,
  TENANT_ID,
  UPLOAD_CONTENT_URL,
  authHeaders,
} from "./endpoints.js";
import * as R from "ramda";
import { Readable } from "stream";
import toReadableStream from 'to-readable-stream';

export const createWebsiteInstance= async( websiteId,websiteUrl,experienceID,websiteName,logoCMSUrl,status,schemaId = "649ff325091c2a0001da537d", tenantId = "618b6fdef5dacc0001a6b1b0") => {

  const crawledWebsitePayload = {
    tenantID: tenantId,
    WebsiteID:websiteId,
    WebsiteLogoUrl: logoCMSUrl,
    crawledPagesNumber: "",
    totalNumberOfPages: "",
    WebsiteName: websiteName,
    WebsiteUrl: websiteUrl,
    tags: [],
    crawlingStatus:status,
    dateCreated: Date.now().toString(),
    timeStamp: Date.now().toString(),
    snapshots: "",
    locations: "",
    assets: "", //TO_DO
    monetUrl: `https://monet.gaiansolutions.com/#/experience-builder/journey?id=${experienceID}`,
  };

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://ingress-gateway.gaiansolutions.com/tf-web/v1.0/${tenantId}/schemas/${schemaId}/instance?upsert=true`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    data: JSON.stringify(crawledWebsitePayload),
  };

  const res = await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.id));
      return response.data.id;
    })
    .catch((error) => {
      console.log(error);
    });

  return res;
  }

export async function updateWebsiteInstance(
  instanceID,
  websiteId,
  websiteUrl,
  experienceID,
  crawledPagesNumber = "",
  totalNumberOfPages = "",
  websiteName = "",
  logoCMSUrl,
  status,
  schemaId = "649ff325091c2a0001da537d",
  tenantId = "618b6fdef5dacc0001a6b1b0"
) {
  const crawledWebsitePayload = {
    tenantID: tenantId,
    WebsiteID:websiteId,
    WebsiteLogoUrl: logoCMSUrl,
    crawledPagesNumber: crawledPagesNumber,
    totalNumberOfPages: totalNumberOfPages,
    WebsiteName: websiteName,
    WebsiteUrl: websiteUrl,
    tags: [],
    crawlingStatus:status,
    dateCreated: Date.now().toString(),
    timeStamp: Date.now().toString(),
    snapshots: "",
    locations: "",
    assets: "", //TO_DO
    monetUrl: `https://monet.gaiansolutions.com/#/experience-builder/journey?id=${experienceID}`,
  };

  // Making Api Call To add single instance of schema
  console.log("Making Update API Call for website ...");

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `https://ingress-gateway.gaiansolutions.com/tf-web/v1.0/${tenantId}/schemas/${schemaId}/instances/${instanceID}?upsert=true`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    data: JSON.stringify(crawledWebsitePayload),
  };

  const res = await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });


    return res.id;
    
}

// Make Sure to change /instances to /instance if we using this function for single page
export async function createPageInstance(
  websiteSchemaID,
  pagePIInstanceId,
  websiteUrl,
  pageTitle,
  status,
  schemaId = "6492f1cf9dda6700015d3060",
  tenantId = "618b6fdef5dacc0001a6b1b0"
) {
  const parentPage = extractParentPageUrl(websiteUrl);
  const crawledWebsitePayload = {
    tenantID: tenantId,
    websiteID: websiteSchemaID,
    websiteUrl: websiteUrl,
    pageID: pagePIInstanceId,
    parentPage: parentPage,
    page: pageTitle,
    timeStamp: Date.now().toString(),
    experienceUrl: '',
    totalAssets:'',
    totalAssetsSize:'',
    status
  };

   /**
    * TO_DO
    * Add totalAssets in Page key value
    * Add totalAssets Size.
    */

  // Making Api Call To add single instance of schema
  console.log("Making API Call for Page ...");


  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://ingress-gateway.gaiansolutions.com/tf-web/v1.0/${tenantId}/schemas/${schemaId}/instance?upsert=true`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    data: JSON.stringify(crawledWebsitePayload),
  };

  const res = await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return res.id;
}

export async function updatePageInstance(resinstanceID, websiteSchemaID, pagePIInstanceId, websiteUrl, pageTitle, MonetAppId, status, schemaId = "6492f1cf9dda6700015d3060",tenantId = "618b6fdef5dacc0001a6b1b0"){
  const parentPage = extractParentPageUrl(websiteUrl);
  const crawledWebsitePayload = {
    tenantID: tenantId,
    websiteID: websiteSchemaID,
    websiteUrl: websiteUrl,
    pageID: pagePIInstanceId,
    parentPage: parentPage,
    page: pageTitle,
    timeStamp: Date.now().toString(),
    experienceUrl: `https://cdn.gaiansolutions.com/index.html?tenantId=${tenantId}&appId=${MonetAppId}&disableTV=true&newdesigner=true`,
    status,
    totalAssets:'',
    totalAssetsSize:'',
  };

  let config = {
    method: "put",
    maxBodyLength: Infinity,
    url: `https://ingress-gateway.gaiansolutions.com/tf-web/v1.0/${tenantId}/schemas/${schemaId}/instances/${resinstanceID}?upsert=true`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwtToken}`,
    },
    data: JSON.stringify(crawledWebsitePayload),
  };

  const res = await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });


    return res.id;

}

// Adding Page  Assets 
export async function addPageAssets(
  pageUrl,
  websiteSchemaID,
  pageId,
  assets,
  schemaId = "6496e01e4ae9d3000107b62f"
) {
  const transformedAssets = [];
  
  async function delayForEach(a, delay) {
    for (let i = 0; i < a.length; i++) {
      console.log('Assets Type', a[i].type)
      let fileUrl = a[i].assetValue;
      let fileSize = a[i].assetValue.length;
      let metaData = [];
      await new Promise((resolve) => setTimeout(resolve, a[i].type==='Image'?delay:"100"));

      if (a[i].type==='Image') {
        console.log("Downloading Image Asset...");
        const { cmsLink,fileBuffer} = await downloadAndUploadFile(pageUrl, a[i].assetValue, UPLOAD_CONTENT_URL);
        console.log('We are here!')
        const { imageFormat, width, height, density, space } =
          await extractImageMetadata(fileBuffer);
        
        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Format"),
          attributeValue: imageFormat,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Width"),
          attributeValue: width,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Height"),
          attributeValue: height,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Density"),
          attributeValue: density,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Space"),
          attributeValue: space,
        });

        fileUrl = cmsLink[0].cdnUrl;
        fileSize = fileBuffer.byteLength;
      } else if(a[i].type=='Text'){
          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontFamily"),
            attributeValue: a[i].fontFamily,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontSize"),
            attributeValue: a[i].fontSize,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontTilt"),
            attributeValue: a[i].fontTilt,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "color"),
            attributeValue: a[i].color,
          })
      }
    }}   
 
  
  async function delayForEach(a, delay) {
    for (let i = 0; i < a.length; i++) {
      console.log('Assets Type', a[i].type)
      let fileUrl = a[i].assetValue;
      let fileSize = a[i].assetValue.length;
      let metaData = [];
      await new Promise((resolve) => setTimeout(resolve, a[i].type==='Image'?delay:"100"));

      if (a[i].type==='Image') {
        console.log("Downloading Image Asset...");
        const { cmsLink,fileBuffer} = await downloadAndUploadFile(pageUrl, a[i].assetValue, UPLOAD_CONTENT_URL);
        console.log('We are here!')
        const { imageFormat, width, height, density, space } =
          await extractImageMetadata(fileBuffer);
        
        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Format"),
          attributeValue: imageFormat,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Width"),
          attributeValue: width,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Height"),
          attributeValue: height,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Density"),
          attributeValue: density,
        });

        metaData.push({
          attributeLogo: getIconForAssetAttribute(a[i].type, "Space"),
          attributeValue: space,
        });

        fileUrl = cmsLink[0].cdnUrl;
        fileSize = fileBuffer.byteLength;
      } else if(a[i].type=='Text'){
          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontFamily"),
            attributeValue: a[i].fontFamily,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontSize"),
            attributeValue: a[i].fontSize,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "fontTilt"),
            attributeValue: a[i].fontTilt,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "color"),
            attributeValue: a[i].color,
          })

          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "lineHeight"),
            attributeValue: a[i].lineHeight,
          })
          metaData.push({
            attributeLogo: getIconForAssetAttribute(a[i].type, "lineHeight"),
            attributeValue: a[i].lineHeight,
          })
      }

      transformedAssets.push({
        tenantID: TENANT_ID,
        websiteID: websiteSchemaID,
        pageID: pageId,
        fileID:generateUniqueId(),  
        fileName: a[i].name,
        fileLogo:
          "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/dc5b9458-a0b3-4441-ba26-95006cbc23af",
        fileUrl,
        fileType: a[i].type,
        fileSize: `${fileSize} B`,
        timeStamp: Date.now().toString(),
        metaData,
      });

    }
  }
  
  delayForEach(assets, 5000)
    .then(() => {
      console.log("Making API call for Assets ...", transformedAssets);
      return postJSON(
        CREATE_SCHEMA_INSTANCES_URL(schemaId),
        transformedAssets,
        authHeaders
      );
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });

}



/***
 * 
 * 
 * : 
 * 
 * [
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/dc5b9458-a0b3-4441-ba26-95006cbc23af",
          attributeValue: "text",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/852795be-bd69-406d-9d29-f6eb96b5c806",
          attributeValue: "200 * 200 px",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/c4627e28-27cd-4e08-8274-b071ee11fdfb",
          attributeValue: "inter",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/ef2aebe3-0c48-401b-a47b-9b77641e9133",
          attributeValue: "16 px",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/5161605d-8173-47eb-9d13-3bacf0a67c25",
          attributeValue: "24 px",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/609ef878-12cc-44e9-afaf-842f1720d3f0",
          attributeValue: "Regular",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/6e1f12f7-8783-4134-a4b2-6571a95f82f1",
          attributeValue: "0",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/6853a06a-117e-4ee8-bf87-1196badb6e1d",
          attributeValue: "400",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/3388aa28-a63c-401a-a7f6-be826a7bfd7d",
          attributeValue: "#ce31c1",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/6853a06a-117e-4ee8-bf87-1196badb6e1d",
          attributeValue: "400",
        },
        {
          attributeLogo:
            "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/6853a06a-117e-4ee8-bf87-1196badb6e1d",
          attributeValue: "400",
        },
      ]
 */

export const extractNodeAttribute = async (page, attribute, node) => {
  return await page.evaluate(
    (el, attribute) => el.getAttribute(attribute),
    node,
    attribute
  );
};

export const extractTextNodeMetaData= async(page, node)=>{
   return await page.evaluate((el)=>{
    const computedStyle = window.getComputedStyle(el);
    return {
      fontSize: computedStyle.fontSize,
      fontFamily: computedStyle.fontFamily,
      color: computedStyle.color,
      lineHeight: computedStyle.lineHeight,
      fontStyle: computedStyle.fontStyle,
      fontWeight: computedStyle.fontWeight,
      fontTilt:
        computedStyle.fontStyle == "italic" ||
        computedStyle.fontStyle == "oblique"
          ? 1
          : 0,
      // Add more properties as needed
    };
  }, node);
};

export async function extractImageMetadata(imagePath) {
  const resMetaData = await sharp(imagePath)
    .metadata()
    .then((metadata) => metadata)
    .catch((err) => {
      console.error("Error reading image metadata:", err);
    });
  return {
    imageFormat: resMetaData.format,
    width: resMetaData.width,
    height: resMetaData.height,
    density: resMetaData.density + "pixels/" + resMetaData.resolutionUnit,
    space: resMetaData.space, //sRGB
  };
}


export const assetTypeConfig = {
  Video: {
    fileIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/0d228685-9af3-46b8-98ee-d86522499798",
    sizeIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/b52d8d11-7658-494b-a937-368a4d2f504d",
    encodingIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/0a8e18bd-84ba-4b35-a351-523cd0350df8",
    durationIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/54e74474-5a57-4919-ac6e-3ce70a1d3527",
    resolutionIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/fffaee2b-1187-42f0-b3ac-8aabd26728e8",
  },
  Image: {
    fileIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/2a86ec95-09c0-48c1-8a1c-75c5768821d3",
    resolutionIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/49f4ee08-277f-43f8-a0de-36b6f29a30c4",
    pixelDensityIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/3ca8020f-8227-4176-9b3f-9adb4ced760d",
    colorRegistrationIConUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/28f15cee-53d5-42c8-ab5a-402930f59cf3",
    dRGBIIconUrl:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/2f742471-933e-40d2-9ba7-5d7be4978b18",
  },
  Text: {
    file:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/dc5b9458-a0b3-4441-ba26-95006cbc23af",
    pixel:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/852795be-bd69-406d-9d29-f6eb96b5c806",
    fontFamily:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/c4627e28-27cd-4e08-8274-b071ee11fdfb",
    lineHeight:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/ef2aebe3-0c48-401b-a47b-9b77641e9133",
    fontSize:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/5161605d-8173-47eb-9d13-3bacf0a67c25",
    fontStyle:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/609ef878-12cc-44e9-afaf-842f1720d3f0",
    fontTilt:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/6e1f12f7-8783-4134-a4b2-6571a95f82f1",
    fontWeight:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/6853a06a-117e-4ee8-bf87-1196badb6e1d",
    color:
      "http://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/3388aa28-a63c-401a-a7f6-be826a7bfd7d",
  },
};


export const getIconForAssetAttribute = (assetType, attribute) => {
  if(assetType==='Text'){
    return assetTypeConfig.Text[attribute]
  }else if(assetType==='Image'){
    return assetTypeConfig.Image[attribute]
  }else if(assetType==='Audio'){
    return assetTypeConfig.Audio[attribute]
  }else if(assetType==='Video'){
    return assetTypeConfig.Video[attribute]
  }else if(assetType==='Iframe'){
    return assetTypeConfig.Iframe[attribute]
  }
}

