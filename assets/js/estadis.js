const graficoLi=document.querySelector("#graficoLinea");
const etiquetasLi=["2016","2017","2018","2019","2020"];
const datosGastos={
    label:"Ingresos en Pokemon",//leyenda
    data:[8000,6000,8000,9000,10000],//datos
    backgroundColor:'#e4e736',
    borderColor:'aliceblue',
    borderWidth:4,//ancho de linea
    tension: 0.1
};
//Creamos el grafico
new Chart(graficoLi,{
    type:'line',
    data:{
        labels:etiquetasLi,
        datasets:[
            datosGastos
            
        ]
    },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }],
        },
    }
});
const graficoPO=document.querySelector("#graficoPo")
  const dataP = {
    labels: [
      '13-17',
      '18-29',
      '30-50',
      '>50'
      
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [22, 46, 25, 6,],
      backgroundColor: [
        'rgba(78, 240, 78, 0.925)',
        'rgba(255, 50, 135, 0.925)',
        'rgb(255, 162, 41, 0.925)',
        'rgb(47, 0, 255, 0.925)'
  
      ]
    }]
  };
new Chart(graficoPo,  {
    type: 'polarArea',
    data: dataP,
    options: {}
  });
const graficoD = document.querySelector("#graficoDo");
const etiquetasD = ["PS", "ATAQUE", "DEFENSA", "VELOCIDAD"]
const datosIngresosD = {
    data: [76, 110, 70, 123], 
    backgroundColor: [
        'rgba(34, 245, 245, 0.925)',
        'rgba(245, 236, 109, 0.925)',
        'rgba(243, 28, 28, 0.925)',
        'rgba(212, 1, 240, 0.925)',
    ],// Color de fondo
    borderColor: [
        'rgba(34, 245, 245, 0.925)',
        'rgba(245, 236, 109, 0.925)',
        'rgba(243, 28, 28, 0.925)',
        'rgba(212, 1, 240, 0.925)',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
    hoverOffset: 4
};
new Chart(graficoD, {
    type: 'doughnut',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetasD,
        datasets: [
            datosIngresosD,
            // Aquí más datos...
        ]
    },
});
const graficoP = document.querySelector("#graficoPi");
const etiquetas = ["Tipo planta", "Tipo lucha", "Tipo hada", "Tipo fantasma"]
const datosIngresos = {
    data: [101, 54, 52, 45], 
    backgroundColor: [
        '#ffffff',
        '#ff00d4',
        '#633f27',
        '#2bcdff',
    ],// Color de fondo
    borderColor: [
        '#ffffff',
        '#ff00d4',
        '#633f27',
        '#2bcdff',
    ],// Color del borde
    borderWidth: 1,// Ancho del borde
    hoverOffset: 4
};
new Chart(graficoP, {
    type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,
            // Aquí más datos...
        ]
    },
});