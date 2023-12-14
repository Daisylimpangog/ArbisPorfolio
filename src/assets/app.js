document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');

    // Create an array of day names for the header
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Create the header row
    const headerRow = document.createElement('div');
    headerRow.classList.add('day');
    dayNames.forEach(day => {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        headerRow.appendChild(dayCell);
    });
    calendar.appendChild(headerRow);

    // Generate calendar days (for demonstration, use a static date range)
    const startDate = new Date();
    startDate.setDate(1); // Start from the first day of the month
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);

    while (startDate <= endDate) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = startDate.getDate();
        calendar.appendChild(dayCell);

        // For demonstration purposes, add some sample events
        if (Math.random() < 0.3) {
            const event = document.createElement('div');
            event.classList.add('event');
            event.textContent = 'Event!';
            dayCell.appendChild(event);
        }

        startDate.setDate(startDate.getDate() + 1);
    }
});