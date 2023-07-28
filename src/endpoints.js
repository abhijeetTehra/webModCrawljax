import { jwtToken } from "./constant.js";

export const HOSTNAME = 'https://ingress-gateway.gaiansolutions.com'

export const TENANT_ID = '618b6fdef5dacc0001a6b1b0'

export const CREATE_SCHEMA_INSTANCES_URL = (schemaId) => `${HOSTNAME}/tf-web/v1.0/${TENANT_ID}/schemas/${schemaId}/instances`

export const authHeaders = { 
    'Content-Type': 'application/json', 
    'Authorization': `Bearer ${jwtToken}`
};

export const UPLOAD_CONTENT_URL = `${HOSTNAME}/content-service/v1.0/content/upload/multiple/designer/321ff654/321t654?filePathAccess=private&filePath=/Household&description=Household&overrideFile=true`