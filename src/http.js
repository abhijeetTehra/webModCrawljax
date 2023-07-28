import axios from "axios";
import * as R from 'ramda';
import FormData from 'form-data';
import fs from "fs/promises";
import { createReadStream } from 'fs';
import { authHeaders } from "./endpoints.js";
import { fileURLToPath } from "url";
import path from "path";
import { uploadFile } from "./cms-utils.js";


export const call = (url, method = "get", body, headers) => {
  const config = {
    method,
    maxBodyLength: Infinity,
    url,
    headers,
  };

  config.data = body;

  return axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => {
      console.error(error);
      throw new Error(error);
    });
};

export const postData = (url, body, headers) =>
  call(url, "post", body, headers);

export const postJSON = (url, body, headers) =>
  postData(url, JSON.stringify(body), headers);

export const getJSON = (url, method = "get", body, headers) => {
  return call(url, method, body, headers).then((resp) => JSON.parse(resp));
};

export  const downloadAndUploadFile = async(pageUrl,fileSource,uploadUrl,method = "get",body, headers) => {

  const downloadUrl=pageUrl+fileSource
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileUrl = new URL(fileSource, pageUrl).href;
  const response = await axios.get(fileUrl, { responseType: "arraybuffer" });
  const fileBuffer= response.data;
  const cmsLink= await uploadFile(fileUrl) 

  return {cmsLink,fileBuffer}
};
