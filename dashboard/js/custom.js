$(document).ready(function() {
  $('[data-toggle="offcanvas"]').click(function() {
    $('#navigation').toggleClass('hidden-xs');
  });
  $('[data-toggle="tooltip"]').tooltip();

  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Carbs', 'Protein', 'Fats'],
      datasets: [
        {
          backgroundColor: ['#2ecc71', '#e74c3c', '#34495e'],
          data: [12, 19, 7]
        }
      ]
    }
  });

  var ctx = document.getElementById('result').getContext('2d');

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '# Kg',
          data: [2, 5, 12, 14, 20, 24, 29],
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  var ctx = document.getElementById('calories').getContext('2d');

  var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '# KCal',
          data: [400, 200, 1500, 800, 500, 1000, 1200],
          backgroundColor: ['rgba(66, 133, 244, 0.2)'],
          borderColor: ['rgba(66, 133, 244,1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
});
