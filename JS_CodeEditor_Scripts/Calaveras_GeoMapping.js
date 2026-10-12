
var aoi = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-121.76265435694107, 37.22464766435332],
          [-121.68362376712867, 37.144269522250475],
          [-121.5607805776442, 37.200586605407445],
          [-121.70840936182388, 37.3612125025051],
          [-121.76542372514075, 37.33229058296439],
          [-121.82925897119888, 37.29787724540455],
          [-121.80859185834498, 37.27436329195922]]]),
    imageVisParam = {"opacity":1,"bands":["slope"],"gamma":1},
    vis_asp = {"opacity":1,"bands":["aspect"],"min":0,"max":359,"palette":["ff0000","ffa600","ffec00","a8ff00","00ffa2","0088ff"]},
    vis_vasp = {"opacity":1,"bands":["aspect variance"],"max":700,"palette":["ffffff","5893ff","3368ff","204fff","030123"]},
    ultramafic = 
    /* color: #0b4a8b */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.72001537931222, 37.22288884522935],
              [-121.72001537931222, 37.21933477078383],
              [-121.71486553800362, 37.21933477078383],
              [-121.71486553800362, 37.22288884522935]]], null, false),
        {
          "label": "ultramafic",
          "system:index": "0"
        }),
    QT_urban = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.75812420499581, 37.294891093394874],
              [-121.75812420499581, 37.29243294896797],
              [-121.75554928434151, 37.29243294896797],
              [-121.75554928434151, 37.294891093394874]]], null, false),
        {
          "label": "QT_urban",
          "system:index": "0"
        }),
    QT = 
    /* color: #bf04c2 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.67641338956612, 37.213046382685874],
              [-121.67641338956612, 37.210585566398365],
              [-121.67349514615792, 37.210585566398365],
              [-121.67349514615792, 37.213046382685874]]], null, false),
        {
          "label": "QT",
          "system:index": "0"
        }),
    KJu = 
    /* color: #ff0000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.70550999295968, 37.25678082973284],
              [-121.70550999295968, 37.2541848054669],
              [-121.70190510404366, 37.2541848054669],
              [-121.70190510404366, 37.25678082973284]]], null, false),
        {
          "label": "QT",
          "system:index": "0"
        }),
    greenstone = 
    /* color: #00ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.72525105130929, 37.23348172738211],
              [-121.72525105130929, 37.23211498749474],
              [-121.72362026822823, 37.23211498749474],
              [-121.72362026822823, 37.23348172738211]]], null, false),
        {
          "label": "greenstone",
          "system:index": "0"
        }),
    Ku = 
    /* color: #0000ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.71650831205194, 37.29055154259661],
              [-121.71650831205194, 37.288912694041045],
              [-121.7141050527746, 37.288912694041045],
              [-121.7141050527746, 37.29055154259661]]], null, false),
        {
          "label": "Ku",
          "system:index": "0"
        }),
    Mmy = 
    /* color: #999900 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.66149066243142, 37.26883381773775],
              [-121.66149066243142, 37.2671944962441],
              [-121.65925906453103, 37.2671944962441],
              [-121.65925906453103, 37.26883381773775]]], null, false),
        {
          "label": "Mmy",
          "system:index": "0"
        }),
    KJ = 
    /* color: #009999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.66988535924276, 37.287583082490364],
              [-121.66988535924276, 37.28491983039345],
              [-121.66731043858846, 37.28491983039345],
              [-121.66731043858846, 37.287583082490364]]], null, false),
        {
          "label": "KJ",
          "system:index": "0"
        }),
    chert = 
    /* color: #ff00ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[-121.62611170811971, 37.2497424054409],
              [-121.62611170811971, 37.24820515300659],
              [-121.62370844884236, 37.24820515300659],
              [-121.62370844884236, 37.2497424054409]]], null, false),
        {
          "label": "chert",
          "system:index": "0"
        });

var polygonArea = aoi.area({'maxError': 1});
print(polygonArea);

// Load Calaveras faults from Qfaults database shp
var asset_id = 'projects/iron-atom-398503/assets/Qfaults_rsaoi_shp';
// Load the asset as a FeatureCollection
var faults = ee.FeatureCollection(asset_id);
var point = ee.Geometry.Point(-121.6755,37.2749);

var geomap_id = 'projects/iron-atom-398503/assets/SanJose_gm_RS_WGS84'
var geomap = ee.Image(geomap_id).clip(aoi);
Map.addLayer(geomap, {}, 'Geologic Map');
//-------------------------------------------------------------------------
// 3DEP Topography 1m resolution
// Load 3DEP 1m DEM
var elevation = ee.ImageCollection('USGS/3DEP/1m');
elevation = elevation.select('elevation');
var proj = elevation.first().select(0).projection();
elevation = elevation.mosaic().setDefaultProjection(proj);

var dep = ee.ImageCollection('USGS/3DEP/1m').filterBounds(aoi);
dep = dep.select('elevation');
var proj = dep.first().select(0).projection();

//print('3DEP Projection', proj);

dep = dep.mosaic().setDefaultProjection(proj).clip(aoi);
//print('3DEP DEM info', dep);

var visualization = {
  min: 0,
  max: 3000,
  palette: [
    '3ae237', 'b5e22e', 'd6e21f', 'fff705', 'ffd611', 'ffb613', 'ff8b13',
    'ff6e08', 'ff500d', 'ff0000', 'de0101', 'c21301', '0602ff', '235cb1',
    '307ef3', '269db1', '30c8e2', '32d3ef', '3be285', '3ff38f', '86e26f'
  ],
};

// Calculate Slope Map 
var slp = ee.Terrain.slope(dep);
var slp_vis = {min:0,max:90,palette:['#ffffff','#000000']};
        

// Calculate Aspect Map
var asp = ee.Terrain.aspect(dep);
//var asp_vis = {min:0,max:359,palette:['blue', 'yellow', 'red']};    

// Calculate Curvature map (Laplacian8)
var dep_lp = dep.convolve(ee.Kernel.gaussian(1));
var lap = ee.Kernel.laplacian8();
var lapl = dep_lp.convolve(lap);
var lapl = lapl.rename('curvature');
var lapl_vis = {min:-5,max:5,palette:['blue','white','red']}; 

// Calculate Variance of Aspect
// Compute standard deviation (SD) as texture of the NDVI.
var var_asp = asp.reduceNeighborhood({
  reducer: ee.Reducer.variance(),
  kernel: ee.Kernel.circle(1),
});
var var_asp = var_asp.rename('aspect variance');

// Create topographic composites
var slp_asp_curv = ee.Image.cat([slp, asp, lapl]);
var slp_aspV_curv = ee.Image.cat([slp, var_asp, lapl]);
var slp_asp_aspV = ee.Image.cat([slp, asp, var_asp]);
//--------------------------------------------------------------------------
// Sentinel 2
// Function to mask clouds from Sentinel 2 SR
function maskS2clouds(image) {
  var qa = image.select('QA60');
  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;
  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
  return image.updateMask(mask).divide(10000);
}

// Sentinel 2 Images of Interest (Surface Reflectance)
var sent_2 = ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED")
.filterDate('2022-01-01','2022-12-31')
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20))
.map(maskS2clouds).median();

var sent_2 = sent_2.clip(aoi);
//print(sent_2);

var vis_sent = {min: 0.0,max: 0.3,bands: ['B4', 'B3', 'B2'],};

//------------------------------------------------------------------------
// Compute NDVI 
// Values range between 1 and -1, where pixels with high photosynthetic activity have a high NDVI
// (NIR - red) / (NIR + red)
var nir = sent_2.select('B8');
var red = sent_2.select('B4');
var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
var vis_ndvi = {min: -1, max: 1, palette: ['blue', 'white', 'green']};


//------------------------------------------------------------------------
// PCA Function: https://developers.google.com/earth-engine/guides/arrays_eigen_analysis

// This helper function returns a list of new band names.
var getNewBandNames = function(prefix) {
  var seq = ee.List.sequence(1, bandNames.length());
  return seq.map(function(b) {
    return ee.String(prefix).cat(ee.Number(b).int());
  });
};

var getPrincipalComponents = function(centered, scale, region) {
  // Collapse the bands of the image into a 1D array per pixel.
  var arrays = centered.toArray();
  // Compute the covariance of the bands within the region.
  var covar = arrays.reduceRegion({
    reducer: ee.Reducer.centeredCovariance(),
    geometry: region,
    scale: scale,
    maxPixels: 1e9
  });
  // Get the 'array' covariance result and cast to an array.
  // This represents the band-to-band covariance within the region.
  var covarArray = ee.Array(covar.get('array'));
  //print(covarArray);
  // Perform an eigen analysis and slice apart the values and vectors.
  var eigens = covarArray.eigen();
  // This is a P-length vector of Eigenvalues.
  var eigenValues = eigens.slice(1, 0, 1);
  //print(eigenValues);
  // This is a PxP matrix with eigenvectors in rows.
  var eigenVectors = eigens.slice(1, 1);
  //print(eigenVectors);
  // Convert the array image to 2D arrays for matrix computations.
  var arrayImage = arrays.toArray(1);
  // Left multiply the image array by the matrix of eigenvectors.
  var principalComponents = ee.Image(eigenVectors).matrixMultiply(arrayImage);
  // Turn the square roots of the Eigenvalues into a P-band image.
  var sdImage = ee.Image(eigenValues.sqrt())
      .arrayProject([0]).arrayFlatten([getNewBandNames('sd')]);
  // Turn the PCs into a P-band image, normalized by SD.
  return principalComponents
      // Throw out an an unneeded dimension, [[]] -> [].
      .arrayProject([0])
      // Make the one band array image a multi-band image, [] -> image.
      .arrayFlatten([getNewBandNames('pc')])
      // Normalize the PCs by their SDs.
      .divide(sdImage);
};
// Sentinel 2 bands 2-12 (excluding B1, B8A)
var bs = sent_2.select(['B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8','B9','B11', 'B12' ]);
// Sentinel 2 bands 1-12
var bs_full = sent_2.select(['B1','B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8','B8A','B9','B11', 'B12' ]);
// Sentinel 2 bands 1-12 + topographic bands
var sent_2_comp = bs_full.addBands([dep, slp, asp, var_asp, lapl]);


//print(bs);

// Set some information about the input to be used later.
var scale = 10;
var bandNames = bs_full.bandNames();
print(bandNames);
var meanDict = bs_full.reduceRegion({
    reducer: ee.Reducer.mean(),
    geometry: aoi,
    scale: scale,
    maxPixels: 1e9
});

var means = ee.Image.constant(meanDict.values(bandNames));
//print(means);

var centered = bs_full.subtract(means);
//print(centered);

var pcImage = getPrincipalComponents(centered, scale, aoi);
//print(pcImage);

var vis_pca = {bands: ['pc1', 'pc2', 'pc3'], min: -2, max: 2};


//-----------------------------------------------------------------------------
// Pair-wise Correlation between Image Bands
var bs_full = sent_2.select(['B1','B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8','B8A','B9','B11', 'B12' ]);
var sent_2_comp = bs_full.addBands([dep, slp, asp, var_asp, lapl]);

// These bands will be the input variables to the model
var bands = sent_2_comp.bandNames();
print(bands);

// Generate random points to sample from the image
var numPoints = 5000
var samples = sent_2_comp.sample({ 
  region: aoi,
  scale: 10, 
  numPixels: numPoints,
  tileScale: 16
});
print(samples.first());

// Calculate pairwise-correlation between each pair of bands
// Use ee.Reducer.pearsonsCorrelation() for Pearson's Correlation
// Use ee.Reducer.spearmansCorrelation() for Spearman's Correlation
var pairwiseCorr = ee.FeatureCollection(bands.map(function(i){
  return bands.map(function(j){
    var stats = samples.reduceColumns({
      reducer: ee.Reducer.pearsonsCorrelation(),
      selectors: [i,j]
    });
    var bandNames = ee.String(i).cat('_').cat(j);
    return ee.Feature(null, {'correlation': stats.get('correlation'), 'band': bandNames});  
  });
}).flatten());

// export the sampled points and calculate correlation in Python
// https://courses.spatialthoughts.com/python-dataviz.html#feature-correlation-matrix
//Export.table.toDrive({
  //collection: samples,
  //description: 'Feature_Sample_Data',
  //folder: 'earthengine',
  //fileNamePrefix: 'feature_sample_data',
  //fileFormat: 'CSV',
  //selectors: bands.getInfo()
//});

//-----------------------------------------------------------------------------
// Ratio R5
// R5 = ((Sentinel-2 B5)2+ (Sentinel-2 B7)2)1∕2
var b5 = sent_2.select(['B5']);
var b7 = sent_2.select(['B7']);
var b3 = sent_2.select(['B3']);
var b5_2= b5.pow(2);
var b7_2 = b7.pow(2);
var b7_2_1_2 = b7_2.pow(0.5);
var r5 = b5_2.add(b7_2_1_2);
//print('r5', r5);
var pc1 = pcImage.select(['pc1']);
var pc2 = pcImage.select(['pc2']);

// Composite Image PC1, R5, B3
var pc1_r5_b3 = ee.Image.cat([pc1, r5, b3]);
//print(composite);
var vis_pc1_r5_b3 = {bands: ['pc1', 'B5', 'B3'], min: -1, max: 1};

// Composite Image PC1, B5, B3
var pc1_b5_b3 = ee.Image.cat([pc1, b5, b3]);
var vis_pc1_b5_b3 = {bands: ['pc1', 'B5', 'B3'], min: -1, max: 1};

// Composite Image PC1, PC2, Slope
var pc1_pc2_slp = ee.Image.cat([pc1, pc2, slp]);

//----------------------------------------------------------------------
//Band Ratio B3/B2
var b2 = sent_2.select(['B2']);
var rb3_b2 = b3.divide(b2); 

var pc3 = pcImage.select(['pc3']);
var pc2 = pcImage.select(['pc2']);
var pc3_pc2 = pc3.divide(pc2); 

// Band Ratio B5/B2 
var b5 = sent_2.select(['B5']);
var b2 = sent_2.select(['B2']);
var rb5_b2 = b5.divide(b2);

// Band Ratio B9/B4 (equiv to L8 B7/B4)
var b4 = sent_2.select(['B4']);
var b9 = sent_2.select(['B9']);
var rb9_b4 = b9.divide(b4);

var r32_r52_r94 = ee.Image.cat([rb3_b2, rb5_b2, rb9_b4]);
//--------------------------------------------------------------------------
// Decorrelation Stretch
// Function to perform decorrelation stretch on an image
var decorrelationStretch = function(image, bands) {
  // Apply decorrelation stretch
  var stretched = image.select(bands).unitScale(0, 255).multiply(255).rgbToHsv().select(['hue', 'saturation']).visualize({
    min: 0, max: 1,});
  
  // Return the stretched image
  return stretched;
};

// Run the decorrelation stretch function on selected image/bands
var image = pcImage; //slp_asp_curv
var bands = ['pc1', 'pc2', 'pc3']; 

var stretchedImage = decorrelationStretch(image, bands);

var imgTopo = slp_asp_curv;
var bands = ['slope', 'aspect', 'curvature']

var stretchedTopo = decorrelationStretch(imgTopo, bands);

//--------------------------------------------------------------------------
// HISTOGRAM
var histogram = ui.Chart.image.histogram({
  image: var_asp.select('aspect variance'), //sent_2.select('B4','B3','B2'),
  region: aoi,
  scale: 30, // Adjust scale as needed based on the resolution of your image
  maxBuckets: 1000 // Adjust maxBuckets as needed
});

// Customize the histogram chart
histogram.setOptions({
  title: 'Histogram of Composite Image',
  hAxis: {title: 'Pixel Value'},
  vAxis: {title: 'Frequency'},
  lineWidth: 1,
  pointSize: 0,
  backgroundColor: '#f0f0f0',
});
// Display the histogram chart
//print(histogram);

//--------------------------------------------------------------------------
// Load Map layers       
//Map.addLayer(slp, slp_vis, 'Slope');
//Map.addLayer(lapl, lapl_vis, 'Curvature');
//Map.addLayer(asp, vis_asp, 'Aspect');
//Map.addLayer(var_asp, vis_vasp, 'Aspect Variance');

Map.addLayer(slp_asp_curv, {}, 'Slope Aspect Curv');
//Map.addLayer(slp_aspV_curv, {}, 'Slope AspVar Curv');
//Map.addLayer(slp_asp_aspV, {}, 'Slope Aspect AspVar');

//Map.addLayer(pc1_r5_b3, vis_pc1_r5_b3, 'pc1_r5_b3');
//Map.addLayer(pc1_b5_b3, vis_pc1_b5_b3, 'pc1_b5_b3');
//Map.addLayer(r32_r52_r94, {}, 'R32, 52, 94');
//Map.addLayer(pc1_pc2_slp, {}, 'PC1 PC2 Slope');

//Map.addLayer(rb3_b2, {}, 'B3/B2');
//Map.addLayer(rb5_b2, {}, 'B5/B2');
//Map.addLayer(rb9_b4, {}, 'B9/B4');

//Map.addLayer(pc3_pc2, {}, 'PC3/PC2');

Map.addLayer(stretchedImage, {}, 'Decorrelation Stretched Image');
Map.addLayer(stretchedTopo, {}, 'Decorrelation Stretched Topography');


//Map.addLayer(ndvi, vis_ndvi, 'NDVI');
//Map.addLayer(r5, {}, 'r5');

Map.addLayer(sent_2, vis_sent, 'Sentinel 2');
Map.addLayer(pcImage, vis_pca, 'PcImage'); 

Map.addLayer(faults, {}, 'qfaults');
Map.centerObject(point, 10);
//Map.addLayer(point, {}, 'point');

//--------------------------------------------------------------------------------------

var samples = ee.FeatureCollection([ultramafic, QT, KJu, Mmy, greenstone]);
var subset = pcImage;

//creating scatter chart
var plotOptions ={
  title : 'PCA Image Reflectance Spectral',
  hAxis : {title:'Wavelength (nanometers)'},
  vAxis : {title: 'Reflectance'},
  lineWidth : 2,
  pointSize: 4,
  curveType: 'function',
}

var wavelengths = [0,50,100,200,300,482,562,655,865,900,1609,2201]

var chart1 = ui.Chart.image.regions(subset, samples, ee.Reducer.mean(), 10)
  .setChartType('LineChart')
  .setOptions(plotOptions);
  
print(chart1)
