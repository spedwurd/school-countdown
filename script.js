days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// summer 
school_start = new Date("September 4, 2024")
today = new Date(Date.now())
summer_days = Math.ceil(((school_start - today) / 86400000))

// school
school_end = new Date("June 25, 2025")
days_until_end = Math.ceil(((school_end - today) / 86400000))

if (summer_days > 0) {
  document.getElementById('days').innerText = summer_days;
  document.getElementById('body').style.backgroundColor = "#FFC05A";
}