//Function to plot table data
function plot()
{
    // Get plot area from html
    PLOTTER = document.getElementById('plot');

    // Get X data cells
    X1 = document.getElementById('x1').value;
    X2 = document.getElementById('x2').value;
    X3 = document.getElementById('x3').value;
    X4 = document.getElementById('x4').value;
    X5 = document.getElementById('x5').value;

    // Get Y data cells
    Y1 = document.getElementById('y1').value;
    Y2 = document.getElementById('y2').value;
    Y3 = document.getElementById('y3').value;
    Y4 = document.getElementById('y4').value;
    Y5 = document.getElementById('y5').value;

    // Create plot
    Plotly.newPlot(PLOTTER, [{ x:[X1,X2,X3,X4,X5], y:[Y1,Y2,Y3,Y4,Y5] }], {margin: {t: 0}});
}