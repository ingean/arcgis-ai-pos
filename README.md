# arcgis-ai-pos
Demo of ArcGIS Maps SDK ai-components

## Using ArcGIS Maps SDK
For simplified version management an import map is used for ArcGIS ES Modules import. To change the version update the import map in index.html
```html
  <script type="module" src="https://js.arcgis.com/5.0/"></script>
```
Using $arcgis.import to import modules
```js
const Portal = await $arcgis.import("@arcgis/core/portal/Portal.js")
```

## Debugging
For debugging, run the following command in the terminal:
```
http-server -S -C /Users/inge/Documents/dev/ssl/localhost.pem -K /Users/inge/Documents/dev/ssl/localhost-key.pem
```

## Components

#### ActionBar

#### Alert

#### MapTheme
In index.html set the Calcite stylesheet url to the preferred theme
```html
  <!--link rel="stylesheet" href="https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/light/main.css" /-->
  <link rel="stylesheet" href="https://js.arcgis.com/4.28/@arcgis/core/assets/esri/themes/dark/main.css" />
```
And wrap application in a div
```html
  <div class="calcite-theme-dark"></div>
```

In main.css set the color scheme for dark themed browser controls e.g. scrollbars etc
```css
:root {
  color-scheme: dark; /* Dark style scrollbars etc.*/
}
```
#### WebMap
Adds a ArcGIS WebMap to the arcgis-map in index.html
```html
  <div id="arcgis-map"></div>
```

