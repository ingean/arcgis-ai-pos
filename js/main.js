import { authenticate } from './utils/OAuth2.js'
const appId = 'w8MteBiiYAwXiNdn' // AppId for Demo_oAuth2_Viewer
const portal = await authenticate(appId) //Authenticate with named user using OAuth2
const mapElement = document.querySelector("arcgis-map");

mapElement.addEventListener("arcgisViewReadyChange", (event) => {
  const { portalItem } = event.target.map
  const navigationLogo = document.querySelector("calcite-navigation-logo")
  navigationLogo.heading = portalItem.title
  navigationLogo.description = portalItem.snippet
  navigationLogo.thumbnail = portalItem.thumbnailUrl
  navigationLogo.href = portalItem.itemPageUrl
  navigationLogo.label = "Thumbnail of map"
  
  const assistantElement = document.querySelector("arcgis-assistant");
  assistantElement.suggestedPrompts = [
    "Find all discoveries closer than 5 kilometers from an existing pipeline.",
    "Find the 3 closest production wells to the Melkøya gas processing plant.",
    "How many surface facilities are more than 50 nautical miles from the coast?",
  ];  
  //document.querySelector("calcite-loader").hidden = true
})

