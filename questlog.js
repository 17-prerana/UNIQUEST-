// Handle Vanquish buttons
document.querySelectorAll('.vanquish').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = "Vanquished!";
    btn.disabled = true;
    btn.style.background = "linear-gradient(90deg, #888, #555)";
    btn.style.color = "#222";
    btn.style.cursor = "not-allowed";
  });
});

// Handle Undo button
document.querySelector('.undo').addEventListener('click', () => {
  alert('Quest reverted! XP reduced.');
});