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
//today = new Date(Date.now()) // this is to preview the summer countdown
today = school_start // i used this as a testing piece to see the compatibility with the school page
summer_days = Math.ceil(((school_start - today) / 86400000))
summer_weeks = Math.ceil(((school_start - today) / (86400000*7)))
summer_months = Math.ceil(((school_start - today) / (86400000*30)))
summer_hours = Math.ceil(((school_start - today) / (86400000/60)))

summer_time = [summer_days, summer_weeks, summer_months, summer_hours]
time_text = ['day(s)', 'week(s)', 'month(s)', 'hour(s)']


// school
school_end = new Date("June 25, 2025")
days_until_end = Math.ceil(((school_end - today) / 86400000))
school_days_until_end = days_until_end;
weeks_until_end = Math.ceil(((school_end - today) / (86400000*7)))
months_until_end = Math.ceil(((school_end - today) / (86400000*30)))
hours_until_end = Math.ceil(((school_end - today) / (86400000/60)))

num_weekends = Math.floor((school_end - today) / (86400000*7))*2
weekend_extra = days_until_end % weeks_until_end;
current_day = today.getDay()

if ((weekend_extra+current_day % 6) < current_day) {
  num_weekends += 2
} else if ((weekend_extra+current_day % 6) == 6) {
  num_weekends += 1
}

school_days_until_end -= num_weekends;
school_days_until_end -= Array.from(holidays.keys()).length;

school_weeks_until_end = Math.ceil(school_days_until_end/7)
school_months_until_end = Math.ceil(school_days_until_end/30)
school_hours_until_end = Math.ceil(school_days_until_end*8)

school_school_time = [school_days_until_end, school_weeks_until_end, school_months_until_end, school_hours_until_end];
school_time = [days_until_end, weeks_until_end, months_until_end, hours_until_end]

closest_holidays = Array.from(holidays.keys()).sort(function (a, b) {  return a - b;  }); // sorts holiday dates from closest to farthest

let has_one = false;
let holiday_one = '';
let hoilday_two = '';

for (h of closest_holidays) { // really terrible code
  if (today >= h) { // if holiday has past
    school_days_until_end += 1; // prevents double counting
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

if (summer_days > 0) { // if its summer
  document.getElementById('days').innerText = summer_days;
  document.getElementById('body').style.backgroundColor = "#FFC05A";
  document.getElementById('description').innerHTML = "<div id='time_measurement' onclick='switchSchoolDays()'>day(s)</div><br> until summer ends.<br>based off Ontario High School Calendar."
  document.getElementById('event_two').remove();
  document.getElementById('event_one').innerText = 'september 4th, 2024';
  document.getElementById('title').innerText = 'summer countdown';
  document.getElementById('favicon').setAttribute('href', '/assets/summer.ico')
} else { // if its school
  document.getElementById('days').innerText = days_until_end;
  document.getElementById('body').style.backgroundColor = "#7FA382";
  document.getElementById('description').innerHTML = "<div id='time_measurement' onclick='switchSchoolDays()'>day(s)</div><br> until school ends.<br>based off Ontario High School Calendar."
  document.getElementById('upcoming').innerHTML = 'upcoming holidays';
  document.getElementById('event_one').innerText = holiday_one;
  document.getElementById('event_two').innerText = holiday_two;
  document.getElementById('favicon').setAttribute('href', '/assets/school.ico')
}

timeChange = 0; // rotation through the time classification

async function changeTime() {
  timeChange += 1;
  timeChange %= 4;
  document.getElementById('time_measurement').innerText = time_text[timeChange]
  if (summer_days > 0) {
    document.getElementById('days').innerText = summer_time[timeChange]
  } else if (isSchool == false) {
    document.getElementById('days').innerText = school_time[timeChange]
  } else {
    document.getElementById('days').innerText = school_school_time[timeChange]
    document.getElementById('time_measurement').innerText = 'school ' + time_text[timeChange]
  }
  document.getElementById('days').style.animation = "fade ease 0.5s";
  await new Promise(r => setTimeout(r, 500));
  document.getElementById('days').style.animation = "";

}

isSchool = false;

async function switchSchoolDays() {
  t = document.getElementById('time_measurement');
  
  if (isSchool == false) {
    t.innerText = 'school ' + t.innerText;
    isSchool = true;
    if (summer_days <= 0) {
      document.getElementById('days').innerText = school_school_time[timeChange]
      document.getElementById('days').style.animation = "fade ease 0.5s";
      await new Promise(r => setTimeout(r, 500));
      document.getElementById('days').style.animation = "";
    }
  } else {
    isSchool = false;
    t.innerText = time_text[timeChange];
    document.getElementById('days').innerText = school_time[timeChange];
    document.getElementById('days').style.animation = "fade ease 0.5s";
    await new Promise(r => setTimeout(r, 500));
    document.getElementById('days').style.animation = "";
  }
}

cursorMove = 0;

async function cursorMoved(event) { // aligns custom cursors
  cursorMove += 1;
  let x = event.pageX;
  let y = event.pageY;
  if (cursorMove%2==0) { // every second time cursor moves it adds trail to lessen the clutter
    let trail = document.createElement('div');
    trail.classList.add('trail');
    trail.style.left = `${x}px`
    trail.style.top = `${y}px`
    document.body.appendChild(trail);
    trail.addEventListener('animationend', () => {
      trail.remove();
    })
  }

  const cursorInfo = document.getElementById('cursor');
  cursorInfo.style.top = y-6 + 'px';
  cursorInfo.style.left = x-4 + 'px';

  const cursorOutlineInfo = document.getElementById('cursor_outline');
  cursorOutlineInfo.style.top = y-15 + 'px';
  cursorOutlineInfo.style.left = x-11.5 + 'px'
}