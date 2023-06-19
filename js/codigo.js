let numeroDonante = 0;

const botonDonacion = document.getElementById("donacion");

botonDonacion.addEventListener("click", function() {
    numeroDonante++;

  window.open("https://www.mercadopago.com.ar/p2p/checkout/payment-landing?request_id=b5cc99b0-e6c4-4504-b370-80f67130e73e", "_blank");

  alert("Muchas gracias por tu donación. Sos el donante número " + numeroDonante);
});

    
// ------------------ Voluntarios -----------------//
const botonVoluntarios = document.getElementById("voluntarios");

botonVoluntarios.addEventListener("click", function() {
  alert("Gracias por tu interés en ser voluntario. Por favor, completa el siguiente formulario y nos pondremos en contacto contigo.");

  setTimeout(function() {
    window.location.href = "file:///C:/Users/magas/OneDrive/Documentos/DonarMas-main/DonarMas-main/contacto.html";
  }, 3000);
});

//-------------------Formulario------------------//
const form = document.getElementById("submit");

form.addEventListener("click", function() {
      
        alert("¡Formulario enviado con éxito!");
      
});