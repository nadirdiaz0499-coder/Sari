// ==========================================
// 1. EFECTO DE REVELACIÓN SCROLL (APPLE STYLE)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const elementosReveal = document.querySelectorAll('.reveal');

    const opcionesObrserver = {
        root: null, 
        threshold: 0.1, 
        rootMargin: "0px 0px -40px 0px" 
    };

    const arrancarEfecto = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('active');
                observador.unobserve(entrada.target); 
            }
        });
    }, opcionesObrserver);

    elementosReveal.forEach(elemento => {
        arrancarEfecto.observe(elemento);
    });
    
    setTimeout(() => {
        const hero = document.querySelector('.hero .reveal');
        if(hero) hero.classList.add('active');
    }, 200);
});


// ==========================================
// 2. CONFIGURACIÓN Y ENVÍO A WHATSAPP
// ==========================================
document.getElementById('formulario-cita').addEventListener('submit', function(e) {
    e.preventDefault();

    // ⚠️ CONFIGURACIÓN IMPORTANTE: 
    // Coloca aquí el número de teléfono de Sari Studio/Mafer.
    // Solo números (Código de país + número). Ejemplo México: "525512345678"
    const numeroWhatsAppSariStudio = "52XXXXXXXXXX"; 

    // Obtener los valores del formulario
    const nombreCliente = document.getElementById('nombre').value.trim();
    const whatsappCliente = document.getElementById('whatsapp').value.trim();
    const servicioSeleccionado = document.getElementById('servicio').value;
    const fechaCita = document.getElementById('fecha').value;
    const horaCita = document.getElementById('hora').value;

    // Cambiar formato de fecha AAAA-MM-DD a DD/MM/AAAA
    const fechaLimpia = fechaCita.split('-').reverse().join('/');

    // Formatear el texto de forma súper limpia y estética usando saltos de línea (%0A)
    const textoMensaje = 
        `✨ *NUEVA CITA - SARI STUDIO* ✨%0A%0A` +
        `👤 *Cliente:* ${nombreCliente}%0A` +
        `📱 *WhatsApp:* ${whatsappCliente}%0A` +
        `💆‍♀️ *Servicio:* ${servicioSeleccionado}%0A` +
        `📅 *Fecha:* ${fechaLimpia}%0A` +
        `⏰ *Hora:* ${horaCita} hrs%0A%0A` +
        `_Nota: Por favor verifica disponibilidad en tu TimeTree para confirmar._`;

    // Generar la URL limpia de la API oficial de WhatsApp
    const urlFinal = `https://wa.me/${numeroWhatsAppSariStudio}?text=${textoMensaje}`;

    // Redirigir de inmediato abriendo pestaña nueva
    window.open(urlFinal, '_blank');
});