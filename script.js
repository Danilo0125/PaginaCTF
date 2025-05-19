// Establecer el año actual en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Array de imágenes aleatorias para el botón de cambiar foto
const imagensPerfil = [
    'https://picsum.photos/300/300?random=1',
    'https://picsum.photos/300/300?random=2',
    'https://picsum.photos/300/300?random=3',
    'https://picsum.photos/300/300?random=4',
    'https://picsum.photos/300/300?random=5'
];

// Eventos para cambiar la foto de perfil
document.getElementById('cambiar-foto').addEventListener('click', function() {
    const randomImg = imagensPerfil[Math.floor(Math.random() * imagensPerfil.length)];
    document.getElementById('profile-pic').src = randomImg;
});

// Gráfico de actividades diarias
const actividadesCtx = document.getElementById('actividadesChart').getContext('2d');
const actividadesChart = new Chart(actividadesCtx, {
    type: 'doughnut',
    data: {
        labels: [
            'Dormir', 
            'Hacer cosas extraordinarias', 
            'Procrastinar extraordinariamente', 
            'Comer de forma extraordinaria',
            'Pensar en qué tan extraordinario es'
        ],
        datasets: [{
            data: [25, 15, 35, 10, 15],
            backgroundColor: [
                '#4a6fa5',
                '#ff6b6b',
                '#feca57',
                '#1dd1a1',
                '#48dbfb'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}% del día`;
                    }
                }
            }
        }
    }
});

// Gráfico de extraordinariedad
const extraordinariedadCtx = document.getElementById('extraordinariedadChart').getContext('2d');
const extraordinariedadChart = new Chart(extraordinariedadCtx, {
    type: 'line',
    data: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', 'Ahora'],
        datasets: [{
            label: 'Nivel de Extraordinariedad',
            data: [10, 25, 15, 60, 40, 75, 90, 100],
            fill: true,
            backgroundColor: 'rgba(74, 111, 165, 0.2)',
            borderColor: 'rgba(74, 111, 165, 1)',
            tension: 0.4,
            pointBackgroundColor: 'rgba(74, 111, 165, 1)',
            pointRadius: 5
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: function(value) {
                        return value + '%';
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Extraordinariedad: ${context.raw}%`;
                    }
                }
            }
        }
    }
});

// Array de datos divertidos
const datosGraciosos = {
    alias: [
        "El Desastre Ambulante", 
        "Maestro del Caos Creativo", 
        "Capitán Improbabilidad",
        "La Leyenda del Sillón",
        "El Susurrador de Pizzas"
    ],
    nacimiento: [
        "Cuando los dinosaurios ya estaban extintos, por suerte",
        "En la era pre-memes, pobrecito",
        "Lo suficientemente tarde para perderse los 80's, lo suficientemente temprano para arrepentirse de su primer corte de pelo",
        "Técnicamente ayer, mentalmente aún no ha nacido"
    ],
    superpoder: [
        "Encontrar el último estacionamiento disponible",
        "Hablar con plantas (ellas no contestan)",
        "Detectar WiFi gratis a 100 metros",
        "Acabarse Netflix",
        "Resistir 5 minutos sin mirar el teléfono"
    ],
    enemigo: [
        "Las instrucciones de IKEA",
        "Su yo del pasado",
        "El autocorrector",
        "El botón de 'Enviar' después de las 2 a.m.",
        "La gravedad (ha ganado todas las batallas)"
    ]
};

// Cambiar datos aleatorios
function cambiarDatoAleatorio(elementId, datos) {
    const elemento = document.getElementById(elementId);
    elemento.innerText = datos[Math.floor(Math.random() * datos.length)];
    elemento.style.opacity = 0;
    setTimeout(() => {
        elemento.style.opacity = 1;
    }, 200);
}

// Establecer animaciones y eventos interactivos
document.getElementById('alias').addEventListener('click', () => cambiarDatoAleatorio('alias', datosGraciosos.alias));
document.getElementById('nacimiento').addEventListener('click', () => cambiarDatoAleatorio('nacimiento', datosGraciosos.nacimiento));
document.getElementById('superpoder').addEventListener('click', () => cambiarDatoAleatorio('superpoder', datosGraciosos.superpoder));
document.getElementById('enemigo').addEventListener('click', () => cambiarDatoAleatorio('enemigo', datosGraciosos.enemigo));

// Inicializar con datos aleatorios
cambiarDatoAleatorio('alias', datosGraciosos.alias);
cambiarDatoAleatorio('nacimiento', datosGraciosos.nacimiento);
cambiarDatoAleatorio('superpoder', datosGraciosos.superpoder);
cambiarDatoAleatorio('enemigo', datosGraciosos.enemigo);
