// Load a shp of markers (Ground Control Points) as an asset
  // and sample elevation values from the 3DEP national DEM at each point
// var asset_id = 'projects/{your_project_name}/assets/small_cala_markers';

// Load the asset as a FeatureCollection
var featureCollection = ee.FeatureCollection(asset_id);

// Load 3DEP 1m
var dataset = ee.ImageCollection('USGS/3DEP/1m');

// get projection of 3DEP dataset
//print('projection: ', dataset.projection()); // Print data projection (should be WGS84)
//visualization params for 3DEP DEM
var visualization = {
  min: 0,
  max: 3000,
  palette: [
    '3ae237', 'b5e22e', 'd6e21f', 'fff705', 'ffd611', 'ffb613', 'ff8b13',
    'ff6e08', 'ff500d', 'ff0000', 'de0101', 'c21301', '0602ff', '235cb1',
    '307ef3', '269db1', '30c8e2', '32d3ef', '3be285', '3ff38f', '86e26f'
  ],
};

// Add the DEM to the map
Map.addLayer(dataset, visualization, '3DEP elevation 1m');
// Add the FeatureCollection to the map
Map.addLayer(featureCollection, {}, "Loaded Feature Collection");
// Center the map on the FeatureCollection
Map.centerObject(featureCollection, 10);


/// Sample the elevation at the points (from 3DEP dem)
var sampledElev = dataset.select('elevation').mean().sample({
  region: featureCollection,
  scale: 1
});
print(featureCollection);
print('elevation: ', sampledElev);
// Extract elevation values from the sampled points
var elevList = sampledElev.aggregate_array('elevation');

// Print the elevation list
print('Elevation List:', elevList);

// Sample x,y coords at the points
//var sampledCoords = featureCollection.coordinates();

var coordinates = featureCollection.map(function(feature) {
  var coords = feature.geometry().coordinates();
  return ee.Feature(null, {coordinates: coords});
});
// Print Long Lat values of each point
print('x,y coords of GCPs', coordinates);

