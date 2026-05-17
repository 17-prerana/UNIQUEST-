document.getElementById('showHint').addEventListener('click', () => {
    alert('Hint: It promotes modularity and reusability.');
});

document.getElementById('revealAnswer').addEventListener('click', () => {
    const answer = document.getElementById('oracleAnswer');
    answer.classList.remove('hidden');
    answer.style.animation = "fadeIn 0.8s ease forwards";
});

const style = document.createElement('style');
style.textContent = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(style);

const popup = document.getElementById('popup');
const popupMsg = document.getElementById('popup-message');
const closePopup = document.getElementById('closePopup');

// Trigger popup for each bridge task
document.querySelectorAll('#bridge-list li').forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');

    // Open popup when clicked anywhere on li
    item.addEventListener('click', (e) => {
        // Avoid firing twice if checkbox directly clicked
        if (e.target.tagName.toLowerCase() === 'input') return;
        popupMsg.textContent = item.getAttribute('data-message');
        popup.style.display = 'flex';
    });

    // Open popup when checkbox checked
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            popupMsg.textContent = item.getAttribute('data-message');
            popup.style.display = 'flex';
        }
    });
});

// Close logic
closePopup.addEventListener('click', () => popup.style.display = 'none');
popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.style.display = 'none';
});

const bridgeButtons = document.querySelectorAll('.bridge-btn');

bridgeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove selection from all other buttons
        bridgeButtons.forEach(b => b.classList.remove('selected'));

        // Select the clicked button
        btn.classList.add('selected');
    });
});


const bridgeTasks = document.querySelectorAll('.bridge-list li');

bridgeTasks.forEach(task => {
    const checkbox = task.querySelector('input[type="checkbox"]');

    // When clicking anywhere on the task
    task.addEventListener('click', (e) => {
        if (e.target !== checkbox) checkbox.checked = !checkbox.checked; // toggle manually if li clicked
        task.classList.toggle('selected', checkbox.checked);
    });

    // Also handle checkbox toggle directly
    checkbox.addEventListener('change', () => {
        task.classList.toggle('selected', checkbox.checked);
    });
});

