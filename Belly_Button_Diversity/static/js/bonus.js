// function buildGauge(wfreq){
//     //D3.json(`/samples/${sample}`).then((data) => {
//     // var selector = d3.select("#gauge");
//     // selector.html("");
//     var data = [
//         {
//             domain: { x: [0, 1], y: [0, 1] },
//             value: wfreq,
//             title: {text:"Scrubs per week" }, 
//             font: {
//                 family: 'Arial',
//                 size: 14

//               },
//             type: "indicator",
//             mode: "gauge+number", 
//             gauge: {
//                 axis: { range: [0, 10] },
//                 steps: [
//                   { range: [0, 1], color: "OldLace " },
//                   { range: [1, 2], color: "Bisque " },
//                   { range: [2, 3], color: "LavenderBlush " },
//                   { range: [3, 4], color: "Lavender  " },
//                   { range: [4, 5], color: "LightSkyBlue " },
//                   { range: [5, 6], color: "MediumTurquoise" },
//                   { range: [6, 7], color: "LightGreen" },
//                   { range: [7, 8], color: "GreenYellow" },
//                   { range: [8, 9], color: "LimeGreen" },
//                   { range: [9, 10], color: "Green" }
//                 ],
//                 bar: { color: "Maroon" },
//                 bgcolor: "white",
//                 borderwidth: 2,
//                 bordercolor: "gray",
//                 margin:{
//                    t:10,
//                    b:10
//                 }
//             }
//         }
//     ];

//     var degrees = 0;
//     var radians = degrees * Math.PI / 180;
//     var x = 0;
//     var y = 0


//     var layout = { 
//         width: 500,
//         height: 400,
//         //margin: { t: 0, b: 0 } ,
//         // shapes: [{
//         //     type: 'line',
//         //     x0: 0.5,
//         //     y0: 0.45,
//         //     x1: 0.6,
//         //     y1: 0.6,
//         //     line: {
//         //       color: 'black',
//         //       width: 3
//         //     }
//         //   }],
//           title: '<b>Belly Button Washing Frequency</b>',
//           font: {
//             family: 'Arial',
//             size: 18
//           },

//         //   xaxis: {visible: false, range: [-1, 1]},
//         //   yaxis: {visible: false, range: [-1, 1]}
//         }



//     Plotly.newPlot("gauge", data, layout);
//     //});
//   }



function buildGauge(wfreq) {
  //https://github.com/mhecktor/plotly-gauge-example/blob/master/index.html
  // Calculate angle to point
  let nstep = 9;
  let FULL_CIRCLE =100;
  // var degrees = 180 - (wfreq * (180 / (nstep )));
  var radius = 0.6;
  var radians =  Math.PI -(wfreq  * Math.PI / (nstep));//degrees * Math.PI / 180;
  var x = radius * Math.cos(radians);
  var y = radius * Math.sin(radians);

  // Path: may have to change to create a better triangle
  var mainPath = 'M -.0 -0.05 L .0 0.05 L ', // bottom of the needle is defined by a line between A=[0,0.05] and B = [0,-0.05]
    pathX = String(x),
    space = ' ',
    pathY = String(y),
    pathEnd = ' Z';
  var path = mainPath.concat(pathX, space, pathY, pathEnd);

  var data = [
    {
      type: 'scatter',
      x: [0], y: [0],
      marker: { size: 30, color: 'maroon' },
      showlegend: false,
      name: 'Frequency',
      text: wfreq,
      hoverinfo: 'text+name',

    },
    {
      values: [ FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep, 
        FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep,
        FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep, FULL_CIRCLE/2 / nstep, // upper 1/2 circle
        FULL_CIRCLE/2 ],  // bottom 1/2 circle. Value = sum(values of upper 1/2 circle)

      rotation: 90,  // rotation =0 -> 0 at the top; rotation = 90, 0 at the right
      // rotation =180 -> 0 at the bottom; rotation = -90, 0 at the left

      text: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
      textinfo: 'text',
      textposition: 'inside',
      marker: {
        colors: ['LimeGreen',    // 8-9
          'GreenYellow',  // 7-8
          'LightGreen',   // 6-7
          'MediumTurquoise', //'5-6'
          'LightSkyBlue', //'4-5'
          'Lavender',     //'3-4'
          'LavenderBlush', // '2-3'
          'Bisque', //'1-2'
          'OldLace',  // '0-1'
          'white']   // bottom half circle is set to white (=> hide the botton 1/2 circle)
      },

      labels: ['8-9', '7-8', '6-7', '5-6', '4-5', '3-4', '2-3', '1-2', '0-1', ''],
      hoverinfo: 'label',
      hole: .5,
      type: 'pie',
      showlegend: false,

    }
  ];

  var layout = {
    width: 800,
    shapes: [{
      type: 'path',
      path: path,
      fillcolor: 'maroon',
      line: {
        color: 'maroon'
      }
    }],

    title: {
      text: '<b>Belly Button Wash Frequency</b><br>Scrubs per week',
      // font: {
      //   family: 'Arial',
      //   size: 12
      // },
    },

    xaxis: {
      zeroline: false, showticklabels: false,
      showgrid: false, range: [-1, 1]
    },
    yaxis: {
      zeroline: false, showticklabels: false,
      showgrid: false, range: [-1, 1]
    }
  };
  Plotly.newPlot('gauge', data, layout);


}