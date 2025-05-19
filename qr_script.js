// Script para la página de QR troll

// Rastrear interacciones del usuario para darle pistas
let clickCount = 0;
let rightClicks = 0;

// Evento para contar clics
document.addEventListener('click', function() {
    clickCount++;
    
    // Después de cierto número de clics, dar una pista
    if (clickCount === 10) {
        console.log('Tip: A veces las respuestas no están en lo que ves, sino en lo que no puedes ver.');
    }
});

// Detectar clics derechos (contextmenu)
document.addEventListener('contextmenu', function(e) {
    rightClicks++;
    
    // Después de 3 clics derechos, dar otra pista
    if (rightClicks === 3) {
        console.log('Tip: El código fuente puede revelar secretos invisibles.');
    }
    
    // No impedir el comportamiento normal del clic derecho
});

// Función para generar un mensaje falso de carga
function fakeLoading() {
    console.log('Iniciando secuencia de descifrado...');
    setTimeout(() => console.log('Analizando datos de imagen...'), 1500);
    setTimeout(() => console.log('Buscando metadatos ocultos...'), 3000);
    setTimeout(() => console.log('Error: Se requiere clave de acceso adicional'), 4500);
}

// Agregar evento al QR especial
document.getElementById('qr-especial').addEventListener('click', function() {
    fakeLoading();
});

// Easter egg - Secuencia Konami
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        
        if (konamiIndex === konamiCode.length) {
            // Activar easter egg
            document.body.style.animation = 'background-flash 0.5s';
            console.log('¡Código Konami detectado! Pero esto sigue sin ser la respuesta correcta...');
            
            // Mostrar una pista falsa para distraer
            alert('ACCESO DENEGADO: Nivel de autorización insuficiente');
            
            // Reiniciar índice
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Agregar una clase CSS para el efecto de flash
const style = document.createElement('style');
style.innerHTML = `
    @keyframes background-flash {
        0% { background-color: #0a0a0a; }
        50% { background-color: #33ff33; }
        100% { background-color: #0a0a0a; }
    }
`;
document.head.appendChild(style);

// Función para ocultar información en la página (para que los participantes la encuentren)
function ocultarInformacion() {
    // Crear un comentario HTML con información
    const commentNode = document.createComment(' La próxima pista está en: /assets/hidden/key.jpg ');
    document.body.appendChild(commentNode);
    
    // También añadir un metadato oculto
    const meta = document.createElement('meta');
    meta.name = "ctf-hint";
    meta.content = "steganography-is-key";
    document.head.appendChild(meta);
}

// Inicializar la página
window.onload = function() {
    ocultarInformacion();
    
    // Agregar un mensaje oculto en la consola
    console.log('%cParece que has encontrado la consola. Buen trabajo, pero esto es solo el principio...', 'color:#33ff33; font-size:14px');
    console.log('%cPista: A veces las imágenes contienen más de lo que muestran.', 'color:#ff9900; font-size:12px');
};
