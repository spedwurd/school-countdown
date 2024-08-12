days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
months = ['January', "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let holidays = new Map();

holidays.set(new Date('2024-09-03'), 'PD Day')
holidays.set(new Date('2024-10-11'), 'PD Day')
holidays.set(new Date('2024-11-01'), 'PD Day')
holidays.set(new Date('2025-01-31'), 'PD Day')
holidays.set(new Date('2025-03-31'), 'PD Day')
holidays.set(new Date('2025-06-26'), 'PD Day')
holidays.set(new Date('2025-06-27'), 'PD Day')
holidays.set(new Date('2025-06-27'), 'PD Day')
holidays.set(new Date('2024-09-02'), 'Labour Day')
holidays.set(new Date('2024-10-14'), 'Thanksgiving')
holidays.set(new Date('2024-12-23'), 'Winter Break')
holidays.set(new Date('2024-12-24'), 'Winter Break')
holidays.set(new Date('2024-12-25'), 'Winter Break')
holidays.set(new Date('2024-12-26'), 'Winter Break')
holidays.set(new Date('2024-12-27'), 'Winter Break')
holidays.set(new Date('2024-12-28'), 'Winter Break')
holidays.set(new Date('2024-12-29'), 'Winter Break')
holidays.set(new Date('2024-12-30'), 'Winter Break')
holidays.set(new Date('2024-12-31'), 'Winter Break')
holidays.set(new Date('2025-01-01'), 'Winter Break')
holidays.set(new Date('2025-01-02'), 'Winter Break')
holidays.set(new Date('2025-01-03'), 'Winter Break')
holidays.set(new Date('2025-02-17'), 'Family Day')
holidays.set(new Date('2025-03-10'), 'March Break')
holidays.set(new Date('2025-03-11'), 'March Break')
holidays.set(new Date('2025-03-12'), 'March Break')
holidays.set(new Date('2025-03-13'), 'March Break')
holidays.set(new Date('2025-03-14'), 'March Break')
holidays.set(new Date('2025-04-18'), 'Good Friday')
holidays.set(new Date('2025-04-21'), 'Easter Monday')
holidays.set(new Date('2025-05-19'), 'Victoria Day')

// summer 
school_start = new Date("September 4, 2024")
today = new Date(Date.now())
summer_days = Math.ceil(((school_start - today) / 86400000))
summer_weeks = Math.ceil(((school_start - today) / (86400000*7)))
summer_months = Math.ceil(((school_start - today) / (86400000*30)))
summer_hours = Math.ceil(((school_start - today) / (86400000/60)))

summer_time = [summer_days, summer_weeks, summer_months, summer_hours]
time_text = ['days', 'weeks', 'months', 'hours']


// school
school_end = new Date("June 25, 2025")
days_until_end = Math.ceil(((school_end - today) / 86400000))
weeks_until_end = Math.ceil(((school_end - today) / (86400000*7)))
months_until_end = Math.ceil(((school_end - today) / (86400000*30)))
hours_until_end = Math.ceil(((school_end - today) / (86400000/60)))

school_time = [days_until_end, weeks_until_end, months_until_end, hours_until_end]

console.log(weeks_until_end)
console.log(summer_weeks)

closest_holidays = Array.from(holidays.keys()).sort(function (a, b) {  return a - b;  });
let has_one = false;
let holiday_one = '';
let hoilday_two = '';
console.log(holiday_one)

for (h of closest_holidays) {
  if (today > h) {
    console.log('past')
  } else if (has_one == false) {
    holiday_one = h.toDateString();
    holiday_one += ` - ${holidays.get(h)}`
    has_one = true;
  } else {
    holiday_two = h.toDateString();
    holiday_two += ` - ${holidays.get(h)}`
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

timeChange = 1;
function changeTime() {
  document.getElementById('time_measurement').innerText = time_text[timeChange]
  if (summer_days > 0) {
    document.getElementById('days').innerText = summer_time[timeChange]
  } else {
    document.getElementById('days').innerText = school_time[timeChange]
  }
  timeChange += 1;
  timeChange %= 4;
}