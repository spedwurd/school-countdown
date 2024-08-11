days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const holidays = [
    new Date('2024-09-03'), new Date('2024-10-11'), new Date('2024-11-01'), new Date('2025-01-31'), new Date('2025-03-31'), new Date('2025-06-26'), new Date('2025-06-27'), new Date('2024-12-23'), new Date('2024-12-24'), new Date('2024-12-25'), new Date('2024-12-26'), new Date('2024-12-27'), new Date('2024-12-28'), new Date('2024-12-29'), new Date('2024-12-30'), new Date('2024-12-31'), new Date('2025-01-01'), new Date('2025-01-02'), new Date('2025-01-03'), new Date('2025-02-17'), new Date('2025-03-10'), new Date('2025-03-11'), new Date('2025-03-12'), new Date('2025-03-13'), new Date('2025-03-14'), new Date('2025-04-18'), new Date('2025-04-21'), new Date('2025-05-19')
];
// summer 
school_start = new Date("September 4, 2024")
//today = new Date(Date.now())
today = new Date("September 4, 2024")
summer_days = Math.ceil(((school_start - today) / 86400000))
// school
school_end = new Date("June 25, 2025")
days_until_end = Math.ceil(((school_end - today) / 86400000))

closest_holidays = holidays.sort(function (a, b) {  return a - b;  });
let has_one = false;
let holiday_one = '';
let hoilday_two = '';
console.log(holiday_one)

for (h of closest_holidays) {
  if (today > h) {
    console.log('past')
  } else if (has_one == false) {
    holiday_one = h.toDateString();
    has_one = true;
  } else {
    holiday_two = h.toDateString();
    break;
  }
}

if (summer_days > 0) {
  document.getElementById('days').innerText = summer_days;
  document.getElementById('body').style.backgroundColor = "#FFC05A";
  document.getElementById('description').innerHTML = "<div id='time_measurement'>days</div> until summer ends.<br>based off Ontario High School Calendar."
  document.getElementById('event_two').remove();
  document.getElementById('event_one').innerText = 'september 4th, 2024';
} else {
  document.getElementById('days').innerText = days_until_end;
  document.getElementById('body').style.backgroundColor = "#7FA382";
  document.getElementById('description').innerHTML = "<div id='time_measurement'>days</div> until school ends.<br>based off Ontario High School Calendar."
  document.getElementById('upcoming').innerHTML = 'upcoming holidays';
  document.getElementById('event_one').innerText = holiday_one;
  document.getElementById('event_two').innerText = holiday_two;
}
