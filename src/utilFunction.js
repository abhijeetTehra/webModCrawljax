import cheerio from 'cheerio'
import { URL } from 'url'
import { v4 as uuidv4 } from 'uuid';
import { experiencePageNodeAddCustomEventAPI, experienceUpdateAPI } from './apiCalls.js';
import {JSDOM} from 'jsdom'
export async function createExperiencePageNode(pageUrl, experienceId, events){
    
  // Page Node Creation
  // await createPageNodeInExperience(pageUrl, monetID, experienceId);

  let experienceAddCustomEventsPayload=[]
  let experiencePageLinkingPayload=[]
  for(let event of events) {
    try {

      let experienceCustomEventPayload={
        "id": "",
        "name": "Test Click event name",
        "type": "CLICK",
        "details": {
            "elementId": ""
        },
        "action": {
            "type": "OVERWRITE",
            "executed_for": "-1",
            "executed_each": "-1"
        }
      }

      let experiencePageConnectLinkPayload = {
        "id": "",
        "source": "",
        "sourceHandle": "",
        "target": "",
        "type": "context"
      };

      const generatedId = generateUniqueId()
      experienceCustomEventPayload.id=generatedId
      experienceCustomEventPayload.details.elementId=event.elementID
      experienceAddCustomEventsPayload.push(experienceCustomEventPayload)
      experiencePageConnectLinkPayload.id=generateUniqueId();
      experiencePageConnectLinkPayload.source= preparePageIdByUrl(event.source);
      experiencePageConnectLinkPayload.sourceHandle=convertIdVueFormat(generatedId)      // converting id which is acceptable in vueFlow library 
      experiencePageConnectLinkPayload.target=preparePageIdByUrl(event.target);
      experiencePageLinkingPayload.push(experiencePageConnectLinkPayload)
    } catch (error) {
       console.log('err', error)
    }
  }
  console.log("making call experiencePageNodeAddCustomEventAPI");
  await experiencePageNodeAddCustomEventAPI(JSON.stringify(experienceAddCustomEventsPayload), experienceId, preparePageIdByUrl(pageUrl))

  console.log("making call experienceUpdateAPI");
  await experienceUpdateAPI(experiencePageLinkingPayload,experienceId)
}
  export const createPageNodeInExperience = async (pageUrl, appId, experienceId) => {
    experienceAddPageNodePayload.id = preparePageIdByUrl(pageUrl)
    experienceAddPageNodePayload.data.id=appId
    experienceAddPageNodePayload.label=pageUrl
    return await experienceUpdateAPI([experienceAddPageNodePayload],experienceId);
  };
  export function htmlDiff(indexStr, stateStr) {
    let result = htmlCompare.compare(indexStr, stateStr);
    return result
  }
  export function getDomainName(url) {
    let domain = url.replace(/^(https?:\/\/)?(www\.)?/i, '');
    domain = domain.split('/')[0];
    return domain;
  }

  export function updateIdAutomatically(htmlInput) {
     // Load the HTML with cheerio
      const $ = cheerio.load('', { decodeEntities: false });
      const parsedHtml = $.parseHTML(htmlInput);

  // Add an ID to each element that does not already have one
  $(parsedHtml)
    .find('*:not([id])')
    .each((index, element) => {
      $(element).attr('id', element.name + '-' + generateUniqueId());
    });

      // Get the resulting HTML
      const updatedHtml = $.html(parsedHtml);

      return updatedHtml;
  }

  export function generateUniqueId() {
    return uuidv4();
  }

  export function extractLinkPath(link){
      const parsedUrl=new URL(link)
      return parsedUrl.pathname
  }

  export async function connectPages(current_page_url, idList, nextPage_url, experienceId)  {
    let experienceUpdatePayload=[]
    for(let id of idList){
     
      experiencePageConnectLinkPayload.id=generateUniqueId();
      experiencePageConnectLinkPayload.source=current_page_url
      experiencePageConnectLinkPayload.sourceHandle=id
      experiencePageConnectLinkPayload.target=nextPage_url
      experienceUpdatePayload.push( experiencePageConnectLinkPayload)
    }

      // Make api call to update experience  
      await experienceUpdateAPI(JSON.stringify(experienceUpdatePayload),experienceId)
  }

  export function convertIdVueFormat(originalId) {
    let newId = originalId
        .replace('id_', 'id-') // Replace 'id_' with 'id-'
        .replace(/([a-z])(\d)/g, '$1-$2') // Add a dash between a letter and a number
        .replace(/(\d)([a-z])/g, '$1-$2') // Add a dash between a number and a letter
        .replace(/([a-z])([a-z])([a-z])/g, '$1-$2-$3'); // Add a dash between every three consecutive letters
    
    return newId;
}

  export async function addExperienceCustomEvent(url,nextPage_url, idList, experienceId){
    let experienceAddCustomEventsPayload=[]
    let experiencePageLinkingPayload=[]
    for(let id of idList){
      try {

        let experienceCustomEventPayload={
          "id": "",
          "name": "Test Click event name",
          "type": "CLICK",
          "details": {
              "elementId": ""
          },
          "action": {
              "type": "OVERWRITE",
              "executed_for": "-1",
              "executed_each": "-1"
          }
        }

        let experiencePageConnectLinkPayload = {
          "id": "",
          "source": "",
          "sourceHandle": "",
          "target": "",
          "type": "context"
        };

        const generatedId=generateUniqueId()
        experienceCustomEventPayload.id=generatedId
        experienceCustomEventPayload.details.elementId=id
        experienceAddCustomEventsPayload.push(experienceCustomEventPayload)

        experiencePageConnectLinkPayload.id=generateUniqueId();
        experiencePageConnectLinkPayload.source=url
        experiencePageConnectLinkPayload.sourceHandle=convertIdVueFormat(generatedId)      // converting id which is acceptable in vueFlow library 
        experiencePageConnectLinkPayload.target=nextPage_url
        experiencePageLinkingPayload.push( experiencePageConnectLinkPayload)
      } catch (error) {
         console.log('err', error)
      }
      
    }
    
    // Make api call add custom event , pass url as params to api 
    await experiencePageNodeAddCustomEventAPI(JSON.stringify(experienceAddCustomEventsPayload), experienceId, url)
    await experienceUpdateAPI(JSON.stringify(experiencePageLinkingPayload),experienceId)
}


export async function isNodeClickable(page,node) {
  const isClickable = await node[0].evaluate(element => {
    console.log('Here we Are')
    const { getComputedStyle } = window;
    const computedStyle = getComputedStyle(element);
    const pointerEvents = computedStyle.getPropertyValue("pointer-events");
    console.log(pointerEvents)
  });
}
