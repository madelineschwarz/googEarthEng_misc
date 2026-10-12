var IcelandAOI = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-22.477163785492596, 63.944058483158194],
          [-22.477163785492596, 63.83314944827095],
          [-22.29932259896916, 63.83314944827095],
          [-22.29932259896916, 63.944058483158194]]], null, false);

// 
var landsatDataset = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
.filterBounds(IcelandAOI) 
.filterDate('2025-05-01', '2025-08-01')
.map(function(image) {
    // Apply scaling factors
    var opticalBands = image.select('SR_B.*').multiply(0.0000275).add(-0.2);
    var thermalBands = image.select('ST_B.*').multiply(0.00341802).add(149.0);
    image = image.addBands(opticalBands, null, true)
                 .addBands(thermalBands, null, true);

    // Get the QA_PIXEL band and create a cloud mask
    var qa = image.select('QA_PIXEL');
    var cloudMask = qa.bitwiseAnd(1 << 3).eq(0) // cloud
                    .and(qa.bitwiseAnd(1 << 4).eq(0)) // cloud shadow
                    .and(qa.bitwiseAnd(1 << 5).eq(0)); // snow (optional)

    return image.updateMask(cloudMask);
  });

var visualization = { 
bands: ['SR_B4', 'SR_B3', 'SR_B2'], // Set an OLI 543 band combination (NIR, Red, Green) 
min: 0.0, 
max: 0.3, 
}; 


Map.centerObject(IcelandAOI, 14); // Center the image at this long/lat and zoom value 
Map.addLayer(landsatDataset, visualization, 'Landsat 8 OLI - False Color'); // Add the map layer 

//----------------------------------------------------------------------------------------

// Load Landsat 8 TOA data
var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(IcelandAOI)
  .filterDate('2025-05-01', '2025-08-01');

// --- CLOUD MASK FUNCTION ---
// Use the 'QA_PIXEL' band (still available in TOA) to mask clouds and cloud shadows.
function maskL8toa(image) {
  var qa = image.select('QA_PIXEL');
  var cloud = qa.bitwiseAnd(1 << 3).eq(0); // Cloud
  var cloudShadow = qa.bitwiseAnd(1 << 4).eq(0); // Cloud shadow
  return image.updateMask(cloud.and(cloudShadow));
}

// Apply mask
var cloudMasked = collection.map(maskL8toa);

// Create a median composite
var composite = cloudMasked.median().clip(IcelandAOI);

// Display result
Map.centerObject(IcelandAOI, 8);
Map.addLayer(composite, {
  bands: ['B7', 'B6', 'B2'],  // true color
  min: 0.05,
  max: 0.4
}, 'Cloud-Free TOA Composite 2025');

//------------------------------------------------


// Load Landsat 8 TOA data
var collection = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA')
  .filterBounds(IcelandAOI)
  .filterDate('2023-05-01', '2023-10-01');

// --- CLOUD MASK FUNCTION ---
// Use the 'QA_PIXEL' band (still available in TOA) to mask clouds and cloud shadows.
function maskL8toa(image) {
  var qa = image.select('QA_PIXEL');
  var cloud = qa.bitwiseAnd(1 << 3).eq(0); // Cloud
  var cloudShadow = qa.bitwiseAnd(1 << 4).eq(0); // Cloud shadow
  return image.updateMask(cloud.and(cloudShadow));
}

// Apply mask
var cloudMasked = collection.map(maskL8toa);

// Create a median composite
var composite = cloudMasked.median().clip(IcelandAOI);

// Display result
Map.centerObject(IcelandAOI, 8);
Map.addLayer(composite, {
  bands: ['B7', 'B6', 'B2'],  // true color
  min: 0.05,
  max: 0.4
}, 'Cloud-Free TOA Composite 2023');

var area = IcelandAOI.area(({'maxError': 1}));
print(area);


// --------------------------------------------


// ---------------------------
// Landsat 9 SR (2025)
// ---------------------------
var landsat9SR_2025 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2')
  .filterBounds(IcelandAOI)
  .filterDate('2025-05-01', '2025-08-01')
  .map(function(image) {

    // Scale reflectance & thermal bands
    var optical = image.select('SR_B.*').multiply(0.0000275).add(-0.2);
    var thermal = image.select('ST_B.*').multiply(0.00341802).add(149.0);

    image = image.addBands(optical, null, true)
                 .addBands(thermal, null, true);

    // Cloud mask
    var qa = image.select('QA_PIXEL');
    var mask = qa.bitwiseAnd(1 << 3).eq(0)      // cloud
      .and(qa.bitwiseAnd(1 << 4).eq(0))         // cloud shadow
      .and(qa.bitwiseAnd(1 << 5).eq(0));        // snow

    return image.updateMask(mask);
});

// Visualization
var visSR = {
  bands: ['SR_B7', 'SR_B6', 'SR_B2'], // Natural color
  min: 0.0,
  max: 0.3
};

Map.centerObject(IcelandAOI, 12);
Map.addLayer(landsat9SR_2025, visSR, 'Landsat 9 SR (2025) - Natural Color');

// Composite from the masked SR collection
var composite2025_SR = landsat9SR_2025.median().clip(IcelandAOI);

Map.addLayer(composite2025_SR, visSR,
  'Cloud-Free SR Composite 2025 (Landsat 9)');

// ---------------------------
// Landsat 9 SR (2023)
// ---------------------------
var landsat9SR_2023 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2')
  .filterBounds(IcelandAOI)
  .filterDate('2023-05-01', '2023-10-01')
  .map(function(image) {

    // Scale optical + thermal
    var optical = image.select('SR_B.*').multiply(0.0000275).add(-0.2);
    var thermal = image.select('ST_B.*').multiply(0.00341802).add(149.0);

    image = image.addBands(optical, null, true)
                 .addBands(thermal, null, true);

    // Cloud & snow mask
    var qa = image.select('QA_PIXEL');
    var mask = qa.bitwiseAnd(1 << 3).eq(0)
      .and(qa.bitwiseAnd(1 << 4).eq(0))
      .and(qa.bitwiseAnd(1 << 5).eq(0));

    return image.updateMask(mask);
});

// 2023 composite
var composite2023_SR = landsat9SR_2023.median().clip(IcelandAOI);

Map.addLayer(composite2023_SR, visSR,
  'Cloud-Free SR Composite 2023 (Landsat 9)');


//----------------- SAVE IMAGES TO DRIVE-------------
Export.image.toDrive({
  image: composite2025_SR,
  description: 'Landsat9_SR_Composite_2025',
  folder: 'EarthEngineExports',     // <-- change to your Drive folder
  fileNamePrefix: 'L9_SR_Composite_2025',
  region: IcelandAOI,
  scale: 30,                       // Landsat native resolution
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});


Export.image.toDrive({
  image: composite2023_SR,
  description: 'Landsat9_SR_Composite_2023',
  folder: 'EarthEngineExports',     // <-- change to your Drive folder
  fileNamePrefix: 'L9_SR_Composite_2023',
  region: IcelandAOI,
  scale: 30,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});
