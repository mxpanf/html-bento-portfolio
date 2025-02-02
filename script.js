/* Toggle between light and dark themes */
function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('light-theme')) {
      body.classList.remove('light-theme'); // Remove light theme
      body.classList.add('dark-theme'); // Add dark theme
      localStorage.setItem('theme', 'dark'); // Save preference in localStorage
    } else {
      body.classList.remove('dark-theme'); // Remove dark theme
      body.classList.add('light-theme'); // Add light theme
      localStorage.setItem('theme', 'light'); // Save preference in localStorage
    }
  }
  
  /* Update the digital clock with Moscow time */
  function updateClock() {
    const now = new Date();
    const localTime = new Date(now.toLocaleString('en-US', { timeZone: 'Etc/UCT' }));
  
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = hours % 12 || 12; // Convert to 12-hour format
  
    document.getElementById('clock').textContent = `${hours12.toString().padStart(2, '0')}:${minutes} ${ampm}`;
  }
  
  /* Run when the DOM is fully loaded */
  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const typingText = document.getElementById('typing-text');
    const text = 'nickname';
    let index = 0;
  
    /* Simulate typing effect for the nickname */
    const typeText = () => {
      if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 150); // Delay between characters
      } else {
        setTimeout(() => {
          loader.classList.add('hidden'); // Hide loader after typing finishes
        }, 1500);
      }
    };
  
    typeText(); // Start typing effect
  
    /* Apply saved theme from localStorage */
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(`${savedTheme}-theme`);
    } else {
      document.body.classList.add('dark-theme'); // Default to dark theme
      localStorage.setItem('theme', 'dark');
    }
  
    /* Start clock updates every second */
    updateClock();
    setInterval(updateClock, 1000);
  });
  