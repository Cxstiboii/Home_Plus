document.addEventListener('DOMContentLoaded', function() {
    // Establecer fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('serviceDate').min = today;
    
    // Manejar envío del formulario
    document.getElementById('finalizeContract').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const serviceDate = formData.get('serviceDate');
        const serviceTime = formData.get('serviceTime');
        const paymentMethod = formData.get('paymentMethod');
        const negotiationNotes = formData.get('negotiationNotes');
        
        // Simular envío de datos
        setTimeout(() => {
            alert(`¡Contratación confirmada con María González!\n\nFecha: ${serviceDate}\nHora: ${serviceTime}\nMétodo de pago: ${getPaymentMethodName(paymentMethod)}`);
            
            // Aquí iría la redirección o actualización de UI
            window.location.href = 'confirmacion.html'; // Ejemplo
        }, 1000);
    });
    
    // Función helper para nombres de métodos de pago
    function getPaymentMethodName(value) {
        const methods = {
            'creditCard': 'Tarjeta de crédito',
            'debitCard': 'Tarjeta débito',
            'pse': 'PSE'
        };
        return methods[value] || value;
    }
    
    // Simular funcionalidad del chat
    document.querySelector('.btn-send').addEventListener('click', function() {
        const input = document.querySelector('.chat-input input');
        const message = input.value.trim();
        
        if (message) {
            const chatContainer = document.querySelector('.chat-messages');
            const newMessage = document.createElement('div');
            newMessage.className = 'message client';
            newMessage.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
            `;
            
            chatContainer.appendChild(newMessage);
            input.value = '';
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            // Simular respuesta automática
            setTimeout(() => {
                const autoReply = document.createElement('div');
                autoReply.className = 'message professional';
                autoReply.innerHTML = `
                    <div class="message-content">
                        <p>¡Claro! Quedo atenta a cualquier otra solicitud.</p>
                        <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                `;
                chatContainer.appendChild(autoReply);
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 1500);
        }
    });
    
    // Permitir enviar mensaje con Enter
    document.querySelector('.chat-input input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            document.querySelector('.btn-send').click();
        }
    });
});