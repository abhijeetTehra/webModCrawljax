import axios from "axios";
import { jwtToken } from "./constant.js";

export async function BroadCasterAPI(pageTitle){
    let data = {
      "entryPageURL": "string",
      "bbandEntryPageUrl": "string",
      "files": [],
      "thumbnail": "",
      "app_name": "appname_1"
    };
    
    data.app_name=pageTitle
    // console.log(pageTitle)
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://ingress-gateway.gaiansolutions.com/broadcasterappstore-service/618b97cef5dacc0001a6b1c1/1194/baApp/?unsavedVersionId=1&tag=tag',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${jwtToken}`
      },
      data : JSON.stringify(data)
    };
    
    const res=await axios.request(config)
    .then((response) => {
      return (JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
    
    return res 
    }

export async function xpbFrameworkAPI(pageData){
        //  eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoid3d3LmdvZ29sZS5jb20vbWVyYV9wcm9maWxlX3BpYy5pbWciLCJzdWIiOiJnYWlhbi5jb20iLCJ1c2VyX25hbWUiOiJ0ZXN0LWRsIiwiaXNzIjoiZ2FpYW4uY29tIiwiYXBwQ29uc3VtZXIiOm51bGwsInVzZXJOYW1lIjoidGVzdC1kbCIsInVzZXJJZCI6IjYxMTRhOGM5NTlmOTJjMDAwMWM4ZjdmZCIsImF1dGhvcml0aWVzIjpbIlJPTEVfT01OSV9DT05TVU1FUiIsIlJPTEVfTUFSS0VUUExBQ0VfVVNFUiIsIlJPTEVfT01OSV9VU0VSIl0sImNsaWVudF9pZCI6IjYwZTU4ZDc5OTU5NDY4MDAwMWUxOTc2OCIsInNjb3BlIjpbInRydXN0IiwicmVhZCIsIndyaXRlIl0sImV4cCI6MTY4NTY1MjgyMSwianRpIjoiYjIzMzA3NTItNzE3My00MGIxLWExY2QtZjFkMjdiMWMxYzMxIiwiZW1haWwiOiJ0ZXN0LWRsX3BlcmZAZ2F0ZXN0YXV0b21hdGlvbi5jb20ifQ.HHZZll8-5qLeFpk_L_e1JpCbKwsyD-iIiB63OWp13FaLOXGayU6ZkAAV2UXNWO_GiFWrSO6nmYKLaBHycs-g-Z73_BG8xlvRm4UWu_CEVszCMj8faXZKH5BnTn4tgp2OpHNpHMcPG04veh8ODnSKhnUJr3ykxUDn9YNRFY9r4meTCRHESXCauFcWHgPxSMAAkgIoHXJX_HlXNjJ2QM6BVUW7EQH0JMg8AVy5D5MTZQPxQ7RgEq0vL-iZHyug3w-Wlh8_T0cwaig0Fw78UvY9Qwwo2HiLQJJ4iO6lozX6zQ84Wtmgwjdn9oIQp5FVWc_90Pp4kn8R-BlyoBlp5W5r3w
         let data = JSON.stringify(pageData);
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ingress-gateway.gaiansolutions.com/xpb-framework/v1.0/618b97cef5dacc0001a6b1c1/ba-app',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${jwtToken}`
        },
        data : data
      };
      
      const res= await axios.request(config)
      .then((response) => {
        return (JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
       
      return res
      
      }        

export async function experienceCreationAPI(payloadObject){

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/618b97cef5dacc0001a6b1c1/experiences',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${jwtToken}`
        },
        data : payloadObject
      };
      
     const res= axios.request(config)
      .then((response) => {
       return(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });  

      return res
}      

export async function experienceUpdateAPI(payloadObject, experienceId){
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `https://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/618b97cef5dacc0001a6b1c1/experiences/add/${experienceId}`,
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': `Bearer ${jwtToken}`
        },
        data : payloadObject
      };
      
      const res=axios.request(config)
      .then((response) => {
        return(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });

      return res
}

export async function experiencePageNodeAddCustomEventAPI(payloadObject, experienceId, pageId ){
  let config = {
    method: 'put',
    maxBodyLength: Infinity,
    url: `https://ingress-gateway.gaiansolutions.com/engagements-web/v1.0/618b97cef5dacc0001a6b1c1/experiences/${experienceId}/${pageId}`,
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${jwtToken}`
    },
    data : payloadObject
  };
  
  const res=axios.request(config)
  .then((response) => {
    return(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  return res
}