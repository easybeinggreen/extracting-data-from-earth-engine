var polygon = ee.Geometry.Polygon([
  32.4, 0.5, 
  32.4, 0.1,
  32.8, 0.1,
  32.8, 0.5 
   ]);
var dataset = ee.ImageCollection("CIESIN/GPWv411/GPW_Population_Density")
            .select('population_density');

var datasetImg = dataset.toBands(); // this conerts the image collection to an image

Map.addLayer(polygon);

// Export the image, specifying scale and region.
Export.image.toDrive({
  // image: datasetImg,
  image: datasetImg,
  description: 'pop_density_image_to_drive',
  scale: 100, // pixel interval in metres
  region: polygon,
  fileFormat:'geoTIFF' // this is default but included for clarity
});
