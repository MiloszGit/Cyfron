// Funkcja pobierająca dane JSON i wstawiająca je do HTML
async function loadContent() {
    try {
      const response = await fetch("C:/Users/milos/Cyfron/lang2.json"); // Pobierz plik JSON
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json(); // Zdeserializuj JSON
  
      // Znajdź element z klasą "contex" i podmienić zawartość <ch1>
      const contextElement = document.querySelector('.contex ch1');
      contextElement.textContent = data.content; // Wstaw tekst z JSON
    } catch (error) {
      console.error('Błąd podczas ładowania treści:', error);
      const contextElement = document.querySelector('.contex ch1');
      contextElement.textContent = 'Błąd podczas ładowania treści.';
    }
  }
  
  // Wywołaj funkcję po załadowaniu skryptu
  loadContent();
  