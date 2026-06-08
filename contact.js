/* ─── Contact form → Web3Forms (delivers submissions to your email inbox) ───
   Setup: get a free access key at https://web3forms.com (enter your email),
   then paste it into the hidden "access_key" input in index.html.            */

const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('response');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalLabel = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';
    formMsg.style.color = '';
    formMsg.textContent = '';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(contactForm),
      });
      const data = await res.json();

      if (data.success) {
        formMsg.style.color = 'var(--green)';
        formMsg.textContent = "Message sent! I'll get back to you soon.";
        contactForm.reset();
      } else {
        formMsg.style.color = 'var(--pink)';
        formMsg.textContent = data.message || 'Something went wrong. Please try again.';
      }
    } catch (err) {
      console.error('Contact form submission failed:', err);
      formMsg.style.color = 'var(--pink)';
      formMsg.textContent = 'Network error — please email me directly instead.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalLabel;
      setTimeout(() => { formMsg.textContent = ''; }, 8000);
    }
  });
}
