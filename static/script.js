document.getElementById('envelope').addEventListener('click', () => {
  const envelope = document.getElementById('envelope');
  const messageEl = document.getElementById('message');

  fetch('/message')
    .then(response => response.json())
    .then(data => {
      envelope.classList.add('open');

      setTimeout(() => {
        messageEl.textContent = data.message;
        messageEl.classList.add('show');
      }, 600);
    });
});



