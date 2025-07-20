
const scriptURL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Feedback submitted successfully!";
      setTimeout(() => msg.innerHTML = "", 3000);
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "Something went wrong!";
    });
});
