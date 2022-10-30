
import Chart from './node_modules/chart.js';

const myDiv = document.createElement("div");
myDiv.setAttribute('style','width:300px;height:300px;');

const myCanvas = document.createElement("canvas");
myCanvas.setAttribute('width','100');
myCanvas.setAttribute('height','100');

myCanvas.id="myChart";

myDiv.appendChild(myCanvas);


const plugin = ({ widgets, simulator }) => {
    widgets.register("myGarph", (box) => {
            box.injectNode(myDiv);
        }
    )

    const labels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: 'Speed Chart',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            data: [2, 8, 7, 3, 5, 15],
            borderWidth: 1
        }]
    };
    const config = {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx,config);

    console.log("Every thing works fine",myChart);
}
export default plugin;
