var imageArray = [
    "https://www.golden-forum.com/resources/image/17927", "https://whyevolutionistrue.files.wordpress.com/2013/12/picture-13.png",
    "https://www.nbc.com/the-tonight-show/content/sites/nbcutsjf/files/styles/bit_stacked_resized/public/images/2014/09/09/liam-neeson_0.jpg?itok=rAV-TLqp",
"https://www.telegraph.co.uk/content/dam/news/2016/07/13/103161577_restricted-fox-news-large_trans++eo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg",
"https://girltalkhq.com/wp-content/uploads/2015/07/latest-e1436570235774.jpg"
    
    
    
    
    
];
var currentIndex = 0;

function renderImage() {
    
    if (currentIndex < 0) {
        currentIndex = imageArray.length - 1;
        
    } else if (currentIndex >= imageArray.length) {
        currentIndex = 0;
}
                $('#thePhoto').attr('src', imageArray[currentIndex]);

}
renderImage();

$('#forwardBtn').on('click', function(){
   //this is what happens when it is clicked 
    currentIndex++;
    renderImage();
});

$('#backBtn').on('click', function(){
    currentIndex--;
    renderImage();
    
    });

var name = prompt("What's your name?");
var outputString = "Happy Holidays, " + name + "!";
$("h1").html(outputString);

// Load the Visualization API and the corechart package.
      google.charts.load('current', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.charts.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Person');
        data.addColumn('number', 'Excitement');
        data.addRows([
          ['Dan', 30],
          ['Sam', 17],
          ['Becca', 11],
          ['Dad', 6],
          ['Mom', 21]
        ]);

          var chartWidth = $(window).width()*0.35;
          
        // Set chart options
        var options = {'title':'Cheerfulness of My Family',
                       'width':chartWidth,
                       'height':300,
                       'backgroundColor': '#F3FFE2',
                      };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }

function mOver(obj) {
    obj.innerHTML = "Happy Holidays"
}

function mOut(obj) {
    obj.innerHTML = "Spread Joy"
}


