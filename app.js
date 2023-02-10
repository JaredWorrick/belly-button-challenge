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

        
    // Create Bar Chart
    var bar_chart = {
        x : sample_values[0],
        y : otu_ids[0].map(x => "OTU" + x),
        text : otu_label[0],
        type : 'bar',
        };

  
    // Plot the bar chart
    var data = [bar_chart];
    var config = {responsive:true}
    Plotly.newPlot('bar', data,config);
  
  
    // Create a bubble chart 
    var bubble_chart = {
        x : otu_ids[0],
        y : sample_values[0],
        text : otu_label[0],
        mode : 'markers',
        marker : {
            color : otu_ids[0],
            size : sample_values[0]
        }
    };
  
    // Plot the bubble chart
    var data_2 = [bubble_chart];
    var config_2 = {responsive:true}
    Plotly.newPlot('bubble',data_2,config_2);

    // 
init();
