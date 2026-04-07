/**
 * Habit Dashboard - Main JavaScript
 * Maneja interacciones del usuario, eventos y manipulación del DOM
 */

// Estado inicial de hábitos
let habits = [
  { id: 1, name: 'Leer 30 minutos', icon: '📚', color: 'bg-blue-100', completed: false, streak: 5 },
  { id: 2, name: 'Hacer ejercicio', icon: '💪', color: 'bg-green-100', completed: true, streak: 12 },
  { id: 3, name: 'Beber 2L de agua', icon: '💧', color: 'bg-purple-100', completed: false, streak: 8 },
  { id: 4, name: 'Meditar', icon: '🧘', color: 'bg-orange-100', completed: true, streak: 21 },
  { id: 5, name: 'Correr 5km', icon: '🏃', color: 'bg-pink-100', completed: false, streak: 3 },
  { id: 6, name: 'Dormir 8 horas', icon: '😴', color: 'bg-yellow-100', completed: true, streak: 15 },
];

// Dark Mode
function initDarkMode() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Cargar preferencia guardada
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'true') {
    html.classList.add('dark');
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('data-dark-mode', 'true');
  }

  themeToggle.addEventListener('click', () => {
    const isDark = html.classList.toggle('dark');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    themeToggle.setAttribute('data-dark-mode', isDark.toString());
    localStorage.setItem('darkMode', isDark.toString());
  });
}

// Renderizar hábitos
function renderHabits() {
  const container = document.querySelector('#habitos .grid');
  if (!container) return;

  container.innerHTML = habits.map(habit => `
    <div class="habit-card bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-habit-id="${habit.id}">
      <div class="flex items-center justify-between mb-4">
        <div class="w-14 h-14 rounded-full flex items-center justify-center text-2xl ${habit.color}">
          ${habit.icon}
        </div>
        <div class="text-right">
          <p class="text-sm text-gray-500 dark:text-gray-400">Racha</p>
          <p class="text-2xl font-bold text-gray-800 dark:text-white">${habit.streak} 🔥</p>
        </div>
      </div>
      <h3 class="text-lg font-semibold text-gray-800 dark:text-white mb-2">${habit.name}</h3>
      <button
        class="toggle-complete w-full py-3 rounded-lg font-medium transition-all duration-300 ${
          habit.completed
            ? 'bg-green-500 hover:bg-green-600 text-white'
            : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300'
        }"
        data-completed="${habit.completed}"
      >
        ${habit.completed ? '✓ Completado' : 'Marcar como completado'}
      </button>
      <button class="delete-habit mt-2 text-red-500 hover:text-red-600 text-sm">Eliminar</button>
    </div>
  `).join('');

  // Agregar event listeners
  container.querySelectorAll('.toggle-complete').forEach(btn => {
    btn.addEventListener('click', toggleHabit);
  });

  container.querySelectorAll('.delete-habit').forEach(btn => {
    btn.addEventListener('click', deleteHabit);
  });
}

// Toggle completado de hábito
function toggleHabit(e) {
  const card = e.target.closest('.habit-card');
  const habitId = parseInt(card.getAttribute('data-habit-id'));
  const habit = habits.find(h => h.id === habitId);

  if (habit) {
    habit.completed = !habit.completed;
    if (habit.completed) {
      habit.streak++;
    } else {
      habit.streak = Math.max(0, habit.streak - 1);
    }
    renderHabits();
    updateStats();
  }
}

// Eliminar hábito
function deleteHabit(e) {
  const card = e.target.closest('.habit-card');
  const habitId = parseInt(card.getAttribute('data-habit-id'));

  if (confirm('¿Estás seguro de eliminar este hábito?')) {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    setTimeout(() => {
      habits = habits.filter(h => h.id !== habitId);
      renderHabits();
      updateStats();
    }, 300);
  }
}

// Actualizar estadísticas
function updateStats() {
  const total = habits.length;
  const completed = habits.filter(h => h.completed).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Actualizar cards de estadísticas si existen
  const statsCards = document.querySelectorAll('#inicio .stats-card');
  if (statsCards.length >= 2) {
    statsCards[1].querySelector('.text-3xl').textContent = `${completed}`;
  }
}

// Formulario de nuevo hábito
function initHabitForm() {
  const form = document.getElementById('habit-form');
  const iconSelector = document.getElementById('icon-selector');
  const colorSelector = document.getElementById('color-selector');
  const selectedIcon = document.getElementById('selected-icon');
  const selectedColor = document.getElementById('selected-color');

  if (!form) return;

  // Selector de íconos
  iconSelector?.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-option')) {
      document.querySelectorAll('.icon-option').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-blue-500');
      });
      e.target.classList.add('ring-2', 'ring-blue-500');
      selectedIcon.value = e.target.getAttribute('data-icon');
    }
  });

  // Selector de colores
  colorSelector?.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-option')) {
      document.querySelectorAll('.color-option').forEach(btn => {
        btn.classList.remove('ring-2', 'ring-blue-500', 'ring-offset-2');
      });
      e.target.classList.add('ring-2', 'ring-blue-500', 'ring-offset-2');
      selectedColor.value = e.target.getAttribute('data-color');
    }
  });

  // Submit del formulario
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('habit-name').value.trim();

    if (name) {
      const newHabit = {
        id: Date.now(),
        name,
        icon: selectedIcon.value,
        color: selectedColor.value,
        completed: false,
        streak: 0
      };

      habits.unshift(newHabit);
      renderHabits();
      updateStats();

      form.reset();
      document.getElementById('selected-icon').value = '📚';
      document.getElementById('selected-color').value = 'bg-blue-100';

      // Reset visual selectors
      document.querySelectorAll('.icon-option').forEach((btn, i) => {
        btn.classList.toggle('ring-2', i === 0);
        btn.classList.toggle('ring-blue-500', i === 0);
      });
      document.querySelectorAll('.color-option').forEach((btn, i) => {
        btn.classList.toggle('ring-2', i === 0);
        btn.classList.toggle('ring-blue-500', i === 0);
        btn.classList.toggle('ring-offset-2', i === 0);
      });

      // Animación de entrada
      const firstCard = document.querySelector('#habitos .grid').firstElementChild;
      if (firstCard) {
        firstCard.classList.add('fade-in');
      }

      alert('¡Hábito agregado exitosamente!');
    }
  });
}

// Smooth scroll para navegación
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = anchor.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Fetch de API externa (ejemplo de clima)
async function fetchWeatherData() {
  try {
    // Usamos una API pública de ejemplo
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current_weather=true');
    const data = await response.json();
    console.log('Clima actual:', data.current_weather);
    return data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    return null;
  }
}

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  renderHabits();
  initHabitForm();
  initSmoothScroll();
  fetchWeatherData();

  console.log('Habit Dashboard initialized');
});
