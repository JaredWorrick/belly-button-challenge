function init() {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then(function (data) {
      console.log(data);
         names = data.samples.map(x=>x.id)
         names.forEach(function(name) {
            d3.select('#selDataset').append('option').text(name)
            });
    
    var sample_values = data.samples.map(x=> x.sample_values);
    var otu_ids = data.samples.map(x=> x.otu_ids);
    var otu_label = data.samples.map(x=> x.otu_labels);
    
  var sorted_test = sample_values.sort(function(a, b){return b-a});
  var top_ten = sorted_test.map(x => x.slice(0,10));
  var sorted_ids = otu_ids.sort(function(a, b){return b-a});
  var top_ids = sorted_ids.map(x =>x.slice(0,10));
  var sorted_labels = otu_label.sort(function(a, b){return b-a});
  var top_labels = sorted_labels.map(x =>x.slice(0,10));

        
    // Create Bar Chart
    var trace1 = {
        x : top_ten[0],
        y : top_ids[0].map(x => "OTU" + x),
        text : top_labels[0],
        type : 'bar',
        orientation : 'h',
        transforms: [{
            type: 'sort',
            target: 'y',
            order: 'descending',
          }],
    };

  
    // Draw the bar chart
    var data = [trace1];
    var config = {responsive:true}
    Plotly.newPlot('bar', data,config);
  
  
    // Create a bubble chart 
    var trace2 = {
        x : otu_ids[0],
        y : sample_values[0],
        text : otu_label[0],
        mode : 'markers',
        marker : {
            color : otu_ids[0],
            size : sample_values[0]
        }
    };
  
    // Draw the bubble chart
    var data2 = [trace2];
    var config = {responsive:true}
    Plotly.newPlot('bubble',data2,config);
init();
