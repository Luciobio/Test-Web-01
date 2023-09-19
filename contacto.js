const btn = document.getElementById('button');
const validaAlerta = document.getElementById('valida');


document.getElementById('formulario')
 .addEventListener('submit', function(event) {
   event.preventDefault();

 
  const emailField = document.getElementById('email');
  const emailValue = emailField.value;

  const nombreField = document.getElementById('nombre');
  const nombreValue = nombreField.value;

  const telefonoField = document.getElementById('telefono');
  const telefonoValue = telefonoField.value;

  const asuntoField = document.getElementById('asunto');
  const asuntoValue = asuntoField.value;

  if (validaAlerta.style.display === 'flex') {
    return; 
  }

 
  if (emailValue.trim() === '' || nombreValue.trim() === '' || telefonoValue.trim() === '' || asuntoValue.trim() === '') {
    const validacion = `
        <p class= "font-bold text-xl heighalerta uppercase">Por favor, completa todos los campos.</p>
    `;
    validaAlerta.style.display = 'flex';
    validaAlerta.innerHTML = validacion; 
    btn.style.display = 'none'
    setTimeout(() => {
      validaAlerta.style.display = 'none';
      btn.style.display = 'flex';
    }, 3000);

    return; 
  }

  
  if (emailValue.trim() !== '' && !isValidEmail(emailValue)) {
    const validacion = `
        <p>Por favor, ingresa una dirección de correo electrónico válida.</p>
    `;
    validaAlerta.style.display = 'flex';
    validaAlerta.innerHTML = validacion; 

    setTimeout(() => {
      validaAlerta.style.display = 'none';
    }, 3000);

    return; 
  }

   btn.value = 'Enviando...';
   const serviceID = 'default_service';
   const templateID = 'template_p329mwy';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Ya ha sido enviado';
      btn.style.background = 'green';

      setTimeout(() => {
        btn.value = 'Enviar';
        btn.style.background = '#D0D2D3';
      }, 3000);
    
      emailField.value = '';
      nombreField.value = '';
      telefonoField.value = '';
      asuntoField.value = '';

    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});



function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }