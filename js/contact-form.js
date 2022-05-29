(function () {
    const form = document.querySelector('.contact-form-formspree');
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.querySelector('.contact-form-status');
      fetch(form.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
      }).then( () => {
        status.innerHTML = "Спасибо за Вашу заявку";
        form.reset();
      }).catch( () => {
        status.innerHTML = "Возникла ошибка при отправке. Попробуйте повторить попытку или связаться с нами через другие контакты"
      });
    }
    form.addEventListener("submit", handleSubmit)
})();