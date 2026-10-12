// Import 90m Geomorphon Dataset
var geom = ee.ImageCollection("projects/sat-io/open-datasets/Geomorpho90m/geom"),
    geometry = /* color: #d63000 */ee.Geometry.MultiPoint();




var roi = ee.Geometry.Rectangle([-121.26851888675064, 36.413213295495495, -120.97944611324935, 36.6628824045045]);
// Define a function to clip each image in the collection
//var clipToROI = function(image) {
  //return image.clip(roi);
//};
// Use the map() function to apply the clipToROI function to each image
//var clippedCollection = geom.map(clipToROI);

// Define a custom palette where each color corresponds to a specific class value.
var classPalette = [
  'FF0000',  // Class 1 (Red)       Flat
  '00FF00',  // Class 2 (Green)     Peak (summit)
  '0000FF',  // Class 3 (Blue)      Ridge
  'FFFF00',  // Class 4 (Yellow)    Shoulder
  'FF00FF',  // Class 5 (Magenta)   Spur (convex)
  '00FFFF',  // Class 6 (Cyan)      Slope
  '800000',  // Class 7 (Maroon)    Hollow (concave)
  '008000',  // Class 8 (Green)     Footslope
  '000080',  // Class 9 (Navy)      Valley
  '808000'   // Class 10 (Olive)    Pit (depression)
];


//Map.addLayer(geom, {}, "Geomorpho90m Image"); // Add the image to the map.

// Create a visualization parameter dictionary for the custom palette.
var visParams = {
  min: 1,  // Minimum class value
  max: 10, // Maximum class value
  palette: classPalette,
};

// Add the raster image with the custom palette to the map.
Map.centerObject(geom, 10); // Center the map on the image.
Map.addLayer(geom, visParams, "Classified Image");

// Add a legend to the map to display class labels.
Map.addLegend({
  pallete: classPalette,
  colors: classPalette,
  title: "Classes",
  position: "bottomright",
});
