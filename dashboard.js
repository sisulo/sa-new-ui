$(function(){
    $('#world-map-markers').vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#C8EEFF', '#0071A4'],
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        markerStyle: {
            initial: {
                fill: '#F8E23B',
                stroke: '#383f47',
            }
        },
        markerLabelStyle : {
            initial: {
                display:"inline"
            }
        },
        
        backgroundColor: '#3c8dbc',
        
        markers: [
            {latLng: [50.05, 14.48], name: 'CZ_Sitel'},
            {latLng: [50.07, 14.44], name: 'CZ_Chodov'},
            {latLng: [2.9, 101.65], name: 'MY_Cyberjaja'},
            {latLng: [3.14, 101.70], name: 'MY_AIMS'},
            {latLng: [39.04, -77.48], name: 'US_Ashburn'},
            {latLng: [40.21, -77.00], name: 'US_Mechanigsburg'},
        ]
    });
    
});

$(function() {
    for(var key in dataset) {
        var data = dataset[key];
        $("." + key).knob({
                'font' : "bold 15px Arial",
                'draw' : function () {
                    key = this.$.attr('class');
                    var internalData = dataset[key];
                    $(this.i).val(internalData["value"] + ' ' + internalData["unit"]);
                    var label = $('.' + key + '-knob-label');
                    $(label[0]).text(internalData["label"]);
                    $(label[1]).html('<i class="fa fa-fw fa-chevron-up" style="color:#cc4316"/> Peak: ' + internalData["peak"] + ' ' + internalData["unit"]);
                
            }
        });
        $("." + key).trigger('change');

    }
})