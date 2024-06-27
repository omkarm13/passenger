
maptilersdk.config.apiKey = mapToken;
const map = new maptilersdk.Map({
    container: 'map', // container's id or the HTML element in which the SDK will render the map
    style: maptilersdk.MapStyle.STREETS,
    // center: [78.9629, 20.5937], // starting position [lng, lat]
    // zoom: 5 // starting zoom

});


if (locMap && locMap.length) {
    map.on('load', async () => {
        map.addSource('search-results', {
            type: 'geojson',
            data: {
                "type": "FeatureCollection",
                "features": []
            }
        });
        // map.addLayer({
        //     'id': 'point-result',
        //     'type': 'circle',
        //     'source': 'search-results',
        //     'paint': {
        //         'circle-radius': 8,
        //         'circle-color': '#FF0000',
        //         'circle-opacity': 0.5
        //     },
        //     'filter': ['==', '$type', 'Point']
        // });
        if (locMap && locMap.length) {
            const results = await maptilersdk.geocoding.forward(locMap);
            map.getSource('search-results').setData(results);
            if (results.features[0]) {
                map.fitBounds(results.features[0].bbox, { maxZoom: 9 });

                var popup = new maptilersdk.Popup({ offset: 25 }).setText(
                    'Exact Location will be provided after booking.'
                );
                const marker = new maptilersdk.Marker({
                    color: "#FF0000",
                })
            .setLngLat(results.features[0].geometry.coordinates)
            .setPopup(popup)
            .addTo(map);
            }
        }
        
    });
};



// async function hello(){
// const result = await maptilerClient.geocoding.forward('paris');
// let x = result;
// console.log(x);
// }
// hello();