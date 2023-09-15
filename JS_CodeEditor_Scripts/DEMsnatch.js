// Define your region of interest (ROI)
// ee.Geometry.Rectangle([xMin, yMin, xMax, yMax])
var roi = ee.Geometry.Rectangle([-121.26851888675064, 36.413213295495495, -120.97944611324935, 36.6628824045045]);
Map.addLayer(roi, {color: 'FF0000'}, 'AOI Rectangle');

var dataset = ee.ImageCollection('USGS/3DEP/1m');

// Define a function to clip each image in the collection
var clipToROI = function(image) {
  return image.clip(roi);
};
// Use the map() function to apply the clipToROI function to each image
var clippedCollection = dataset.map(clipToROI);

var visualization = {
  min: 0,
  max: 3000,
  palette: [
    '3ae237', 'b5e22e', 'd6e21f', 'fff705', 'ffd611', 'ffb613', 'ff8b13',
    'ff6e08', 'ff500d', 'ff0000', 'de0101', 'c21301', '0602ff', '235cb1',
    '307ef3', '269db1', '30c8e2', '32d3ef', '3be285', '3ff38f', '86e26f'
  ],
};

Map.addLayer(clippedCollection, visualization, 'elevation');

// Export the clipped DEM to Google Drive
Export.image.toDrive({
  image: clippedCollection.select('elevation').median(), // Use median to reduce image collection to a single image
  description: 'clipped_dem', // File name
  scale: 5, // Pixel resolution of DEM (meters); Set the desired scale (adjust as needed)
  region: roi, // Set the region to export
});
