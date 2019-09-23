function buildGauge(wfreq){
    //D3.json(`/samples/${sample}`).then((data) => {
    // var selector = d3.select("#gauge");
    // selector.html("");
    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: wfreq,
            title: {text:"Scrubs per week" }, 
            font: {
                family: 'Arial',
                size: 14
               
              },
            type: "indicator",
            mode: "gauge+number", 
            gauge: {
                axis: { range: [0, 10] },
                steps: [
                  { range: [0, 1], color: "OldLace " },
                  { range: [1, 2], color: "Bisque " },
                  { range: [2, 3], color: "LavenderBlush " },
                  { range: [3, 4], color: "Lavender  " },
                  { range: [4, 5], color: "LightSkyBlue " },
                  { range: [5, 6], color: "MediumTurquoise" },
                  { range: [6, 7], color: "LightGreen" },
                  { range: [7, 8], color: "GreenYellow" },
                  { range: [8, 9], color: "LimeGreen" },
                  { range: [9, 10], color: "Green" }
                ],
                bar: { color: "Maroon" },
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "gray",
                margin:{
                   t:10,
                   b:10
                }
            }
        }
    ];

    var degrees = 0;
    var radians = degrees * Math.PI / 180;
    var x = 0;
    var y = 0


    var layout = { 
        width: 500,
        height: 400,
        //margin: { t: 0, b: 0 } ,
        // shapes: [{
        //     type: 'line',
        //     x0: 0.5,
        //     y0: 0.45,
        //     x1: 0.6,
        //     y1: 0.6,
        //     line: {
        //       color: 'black',
        //       width: 3
        //     }
        //   }],
          title: '<b>Belly Button Washing Frequency</b>',
          font: {
            family: 'Arial',
            size: 18
          },
        
        //   xaxis: {visible: false, range: [-1, 1]},
        //   yaxis: {visible: false, range: [-1, 1]}
        }
    
    

    Plotly.newPlot("gauge", data, layout);
    //});
  }
