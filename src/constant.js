export const urlsDataObject = {
    "url": "",
    "pageId": "",
    "baId": ""
}
export const event = {
    eventName: "Inplace " + "click" + " Event",
    eventType: "onClick",
    elementID: "elementId",
    isPublic: true,
    actions: [
      {
        actionType: "SHOW_HTML",
        actionParams: [
          {
            html: "strMess",
            targetSelector: "changes[i].before.parentPath",
            action: "Added",
          },
        ],
      },
    ],
  };
export const experienceCreationPayload = {
    "name": "",
    "description": "",
    "configuration": {},
    "experienceElements": [
        {
            "type": "start-node",
            "dimensions": {
                "width": 150,
                "height": 36
            },
            "handleBounds": {
                "source": [
                    {
                        "id": "right",
                        "position": "right",
                        "x": 146.00001017252606,
                        "y": 14.000000953674316,
                        "width": 8,
                        "height": 8
                    },
                    {
                        "id": "left",
                        "position": "left",
                        "x": -4.000002543131511,
                        "y": 14.000000953674316,
                        "width": 8,
                        "height": 8
                    },
                    {
                        "id": "bottom",
                        "position": "bottom",
                        "x": 71.00001017252605,
                        "y": 32.00000127156576,
                        "width": 8,
                        "height": 8
                    },
                    {
                        "id": "top",
                        "position": "top",
                        "x": 71.00001017252605,
                        "y": -4.00000015894572,
                        "width": 8,
                        "height": 8
                    }
                ]
            },
            "computedPosition": {
                "x": 2.25,
                "y": 0,
                "z": 1000
            },
            "connectable": false,
            "id": "start-node",
            "label": "Update experience start node label",
            "sourcePosition": "right",
            "position": {
                "x": 2.25,
                "y": 0
            },
            "events": {},
            "selected": true
        },
        {
            "type": "plateforme-node",
            "dimensions": {
            "width": 155,
            "height": 45
            },
            "handleBounds": {
            "source": [
            {
            "id": "node_1__handle-right",
            "position": "right",
            "x": 151.33310535921348,
            "y": 18.666651588125625,
            "width": 8,
            "height": 8
            }
            ],
            "target": [
            {
            "id": "node_1__handle-left",
            "position": "left",
            "x": -4.000007341907418,
            "y": 18.666651588125625,
            "width": 8,
            "height": 8
            }
            ]
            },
            "computedPosition": {
            "x": -568.073125084549,
            "y": -228.567626560684,
            "z": 0
            },
            "id": "node_1",
            "position": {
            "x": -568.073125084549,
            "y": -228.567626560684
            },
            "label": "Websitenode_1",
            "data": {
            "thumbnail": "https://www.svgrepo.com/show/302570/website.svg",
            "plateform": "Website",
            "source": {
            "input": "left",
            "output": "right"
            },
            "configuration": {
            "dataSource": [],
            "source": {},
            "destination": {},
            "channel": {
            "channelType": "Website",
            "mefType": "",
            "packageName": "",
            "command": "",
            "rpcFilename": "",
            "destinationAttribute": "model.entities[*].deviceId",
            "contents": []
            }
            }
            },
            "events": {},
            "selected": false
        },
        {
            "id": "e-start-node-node_4",
            "source": "start-node",
            "target": "node_1"
        }
    ],
    "gitSource": "string",
    "medias": [],
    "pages": {},
    "published": true,
    "tags": [
      "TEST"
    ],
    "thumbnail": "https://ingress-gateway.gaiansolutions.com/content-service/v1.0/content/download/b1809f1b-44de-405d-8877-383ca764e135",
    "version": 0
  }

export const jwtToken='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImZmOGYxNjhmLTNmZjYtNDZlMi1iMTJlLWE2YTdlN2Y2YTY5MCJ9.eyJwcm9maWxlVXJsIjoiaHR0cDovL2Rldi5hcGktZ2F0ZXdheS5nYWlhbnNvbHV0aW9ucy5jb206ODAvY29udGVudC1zZXJ2aWNlL3YxLzA3MTk3NTZiLWVlM2EtNGMxYS04OGIyLTkzMGRjODAyMTI3OSIsInN1YiI6ImdhaWFuLmNvbSIsInVzZXJfbmFtZSI6IndodXQiLCJpc3MiOiJnYWlhbi5jb20iLCJhcHBDb25zdW1lciI6bnVsbCwidXNlck5hbWUiOiJ3aHV0IiwidXNlcklkIjoiNjQxMmFiZjNhMWUzM2EwMDAxNjBiMDA2IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9PTU5JX0NPTlNVTUVSIiwiUk9MRV9NQVJLRVRQTEFDRV9VU0VSIl0sImNsaWVudF9pZCI6ImdhaWFuIiwic2NvcGUiOlsidHJ1c3QiLCJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjkwMzk1OTU0LCJqdGkiOiIwMDc1Yzk0Ny0yMjkxLTQ4ODEtOWEyZS04NGI0MzZhNGUxNTYiLCJlbWFpbCI6IndodXRAZ2F0ZXN0YXV0b21hdGlvbi5jb20ifQ.VChsB_S8KKH50En_MOa6qVYHl2gEti5IcwJMg9MP2ud9f7vKw0qVOUwkFdygxaOxWVOEZSA5PWC9r1o8CmyPFDG1ToTLGone2QmXYcvO2xcBhLi8ns8j3N1KbuIG_zbSnGkJZxxK4-6Q7lICVgrGpEyYy7tl_HVWUKsAmhGx2z3_AIuUVeQ6Z9aKv2OicayEhlHcJC-wqbJMR4vQOc7lFwRMTjLJiV7Pr6WUjUe2XuE3DDoHM4oDOa60m6fuUT5HdVpQJwKTNj4BdL7rgZWEw7vMucn-vcUxZsnmgYwvuXc1X5smexgKo1-oe-fA-wgUP-hgp-gPxgVeL-lyK_E-YA';

export const PAGE_ACTION_TYPES = {
    CLICK: 'click',
    HOVER: 'mouseenter',
};

export const xpbFrameworkPayload={
    "baAppName": "",
    "id": "",
    "ownerId": "618b6fdef5dacc0001a6b1b0",
    "config": {
      "assets": [],
      "styles": [],
      "pages": [
        {
          "frames": [
            {
              "component": {
                "type": "wrapper",
                
              }
            }
          ],
          "type": "main",
          "id": "eg3GdUtlLtqf0zrk"
        }
      ]
    },
    "html": {
      "pre": "",
      "body": ""
    },
    "css": "",
    "script": "console.log('Init')",
    "wrapper": [],
    "types": {},
    "metaData": [],
    "sources": [],
    "deleted": false,
    "events": [],
    "files": [],
    "entryPageURL": "Mobius MarketingURL",
    "bbandEntryPageUrl": "Mobius Marketing",
    "bcastEntryPackageUrl": "Mobius Marketing",
    "bcastEntryPageUrl": "Mobius Marketing",
    "version": "v_1",
    "defaults": {},
    "groupIds": [],
    "aqIds": []
}

export const experienceUpdatePayload=[]

export const experienceAddPageNodePayload={
    "id": "",
    "type": "page-node",
    "position": {
        "x": -901.7380990891172,
        "y": -105.23961389892416
    },
    "label": "Mobius Home Page",
    "data": {
        "id": "",
        "owner": "618b6fdef5dacc0001a6b1b0",
        "details": {
            "tenantId": "618b6fdef5dacc0001a6b1b0",
            "name": "Untitled_App zoyqd",
            "channelType": "MEF",
            "published": false,
            "thumbnail": "https://mobius-test3.vercel.app/static/media/brand-logo.11c0f5f52deb8c9ed8e7be94a46a59ce.svg",
            "lastPublishedTimeMs": 0,
            "contentType": "BA"
        },
        "configuration": [],
        "customEvent": [],
        "accessible": false,
        "dependencies": {}
    },
    "events": {},
    "selected": false
}

export const experienceAddParamLinkPayload = {
    "id": "e-start-node-node_1",
    "source": "UNIQUE_JOURNEYMAPPER_BRANCH_ID",
    "target": "default_page",
    "type": "context",
    "data": {
        "trigger": {
            "triggerType": "params",
            "triggerName": "UP TO YOU",
            "triggerIcon": "fa-solid fa-sitemap",
             "params": {}
        }
    }
}

export let experiencePageConnectLinkPayload={
      "id": "",
      "source": "",
      "sourceHandle": "",
      "target": "",
      "type": "context"
}

export let  experienceCustomEventPayload={
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

export let pageAssets={

}    