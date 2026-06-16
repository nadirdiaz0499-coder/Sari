// ==========================================
// 1. MOTOR DE ANIMACIONES DE SCROLL FLUIDO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const elementosReveal = document.querySelectorAll('.reveal');

    const opcionesObserver = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px"
    };

    const arrancarEfecto = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('active');
                observador.unobserve(entrada.target);
            }
        });
    }, opcionesObserver);

    elementosReveal.forEach(elemento => {
        arrancarEfecto.observe(elemento);
    });

    setTimeout(() => {
        const hero = document.querySelector('.hero .reveal');
        if(hero) hero.classList.add('active');
    }, 150);
});

// ==========================================
// 2. LOGICA FORMULARIO Y SALIDA WHATSAPP
// ==========================================
document.getElementById('formulario-cita').addEventListener('submit', function(e) {
    e.preventDefault();

    // ⚠️ INGRESA EL TELÉFONO DE MAFER AQUÍ (Con código de país, ej: "525512345678")
    const numeroWhatsAppSariStudio = "52XXXXXXXXXX"; 

    const nombreCliente = document.getElementById('nombre').value.trim();
    const whatsappCliente = document.getElementById('whatsapp').value.trim();
    const servicioSeleccionado = document.getElementById('servicio').value;
    const fechaCita = document.getElementById('fecha').value;
    const horaCita = document.getElementById('hora').value;

    const fechaLimpia = fechaCita.split('-').reverse().join('/');

    // 🚀 MENSAJE REFORMULADO SIN "TIMETREE"
    const textoMensaje = 
        `✨ *NUEVA SOLICITUD DE CITA* ✨%0A%0A` +
        `👤 *Cliente:* ${nombreCliente}%0A` +
        `📱 *WhatsApp:* ${whatsappCliente}%0A` +
        `💆‍♀️ *Servicio:* ${servicioSeleccionado}%0A` +
        `📅 *Fecha:* ${fechaLimpia}%0A` +
        `⏰ *Hora:* ${horaCita} hrs%0A%0A` +
        `_Quedo a la espera de tu confirmación para agendar y realizar el anticipo._`;

    const urlFinal = `https://wa.me/${numeroWhatsAppSariStudio}?text=${textoMensaje}`;
    window.open(urlFinal, '_blank');
});
