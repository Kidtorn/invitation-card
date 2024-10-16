

function showCard() {
  const card = document.querySelector('.card');
  const envelope = document.getElementById('envelope');
  
  card.style.display = 'block'; // Show the card
  envelope.style.display = 'none'; // Hide the email emoji
  card.classList.add('show'); // Add class for animations if any
}

// RSVP function (keep your existing function here)
function rsvp() {
  alert("Thank you for RSVPing!");
}
// Countdown to the event
const eventDate = new Date("October 19, 2024 14:00:00").getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = eventDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = 
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "The event has started!";
  }
}, 1000);

// RSVP button functionality
function rsvp() {
  alert("Thank you for your RSVP! 🎉");
}
