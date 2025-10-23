// Chart.js configuration and data
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Chart.js to load
    if (typeof Chart !== 'undefined') {
        initCharts();
    } else {
        console.error('Chart.js not loaded');
    }
});

function initCharts() {
    // Chart.js default configuration
    Chart.defaults.font.family = 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    Chart.defaults.color = '#64748b';
    Chart.defaults.plugins.legend.labels.usePointStyle = true;
    Chart.defaults.plugins.legend.labels.padding = 20;
    
    // Color palette
    const colors = {
        primary: '#2d5a27',
        secondary: '#4a7c59',
        accent: '#2563eb',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
        info: '#3b82f6',
        light: '#f8fafc'
    };
    
    // Profit Chart (Line Chart)
    const profitCtx = document.getElementById('profitChart');
    if (profitCtx) {
        new Chart(profitCtx, {
            type: 'line',
            data: {
                labels: ['2026', '2027', '2028', '2029', '2030'],
                datasets: [{
                    label: 'Прибыль (млн руб)',
                    data: [-4.475, 25.295, 28.461, 37.911, 42.831],
                    borderColor: colors.primary,
                    backgroundColor: colors.primary + '20',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: colors.primary,
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: colors.primary,
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return 'Прибыль: ' + context.parsed.y.toFixed(3) + ' млн руб';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' млн';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // Investment Structure Chart (Doughnut Chart)
    const investmentCtx = document.getElementById('investmentChart');
    if (investmentCtx) {
        new Chart(investmentCtx, {
            type: 'doughnut',
            data: {
                labels: ['Основные средства', 'Клубника', 'Кустарники', 'Сады', 'Овощи'],
                datasets: [{
                    data: [14.7, 4.0, 10.57, 15.0, 0],
                    backgroundColor: [
                        colors.primary,
                        colors.secondary,
                        colors.accent,
                        colors.success,
                        colors.warning
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    hoverOffset: 10
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': ' + context.parsed + ' млн руб (' + percentage + '%)';
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
    
    // Cash Flow Chart (Bar Chart)
    const cashflowCtx = document.getElementById('cashflowChart');
    if (cashflowCtx) {
        new Chart(cashflowCtx, {
            type: 'bar',
            data: {
                labels: ['2026', '2027', '2028', '2029', '2030'],
                datasets: [{
                    label: 'Накопленный поток (млн руб)',
                    data: [-20.858, 6.214, 44.689, 85.857, 130.249],
                    backgroundColor: [
                        colors.danger,
                        colors.warning,
                        colors.info,
                        colors.success,
                        colors.primary
                    ],
                    borderColor: [
                        colors.danger,
                        colors.warning,
                        colors.info,
                        colors.success,
                        colors.primary
                    ],
                    borderWidth: 1,
                    borderRadius: 4,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                return 'Накопленный поток: ' + context.parsed.y.toFixed(3) + ' млн руб';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' млн';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Profit Distribution Chart (Horizontal Bar Chart)
    const profitDistributionCtx = document.getElementById('profitDistributionChart');
    if (profitDistributionCtx) {
        new Chart(profitDistributionCtx, {
            type: 'bar',
            data: {
                labels: ['Клубника', 'Овощи', 'Кустарники', 'Сады', 'Субсидии', 'Основные средства'],
                datasets: [{
                    label: 'Прибыль за 5 лет (млн руб)',
                    data: [66.556, 53.225, 10.273, 17.45, 22.709, -41.370],
                    backgroundColor: [
                        colors.primary,
                        colors.secondary,
                        colors.accent,
                        colors.success,
                        colors.info,
                        colors.danger
                    ],
                    borderColor: [
                        colors.primary,
                        colors.secondary,
                        colors.accent,
                        colors.success,
                        colors.info,
                        colors.danger
                    ],
                    borderWidth: 1,
                    borderRadius: 4
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed.x.toFixed(3) + ' млн руб';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' млн';
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// Chart animation on scroll
function animateChartsOnScroll() {
    const chartElements = document.querySelectorAll('canvas');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger chart animation
                const chart = Chart.getChart(entry.target);
                if (chart) {
                    chart.update('active');
                }
            }
        });
    }, { threshold: 0.5 });
    
    chartElements.forEach(canvas => {
        observer.observe(canvas);
    });
}

// Initialize chart animations when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateChartsOnScroll, 1000);
});

// Export chart data as JSON (for debugging)
function exportChartData() {
    const chartData = {
        profit: [-4.475, 25.295, 28.461, 37.911, 42.831],
        investment: {
            'Основные средства': 14.7,
            'Клубника': 4.0,
            'Кустарники': 10.57,
            'Сады': 15.0,
            'Овощи': 0
        },
        cashflow: [-20.858, 6.214, 44.689, 85.857, 130.249],
        profitDistribution: {
            'Клубника': 66.556,
            'Овощи': 53.225,
            'Кустарники': 10.273,
            'Сады': 17.45,
            'Субсидии': 22.709,
            'Основные средства': -41.370
        }
    };
    
    console.log('Chart Data:', JSON.stringify(chartData, null, 2));
    return chartData;
}

// Make export function available globally
window.exportChartData = exportChartData;
