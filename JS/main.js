document.getElementById('comingUpContent').style.display = 'none';
document.getElementById('pastEventsContent').style.display = 'none';

//Hides all panels
function hidePanels() {
  document.getElementById('pastEventsContent').style.display = 'none';
  document.getElementById('eventsWeekContent').style.display = 'none';
  document.getElementById('comingUpContent').style.display = 'none';
}

//Opens coming up and hides all other panels
function showComingUp() {
  hidePanels();
  document.getElementById('comingUpContent').style.display = 'block';
}

//Opens past events and hides all other panels
function showPastEvents() {
  hidePanels();
  document.getElementById('pastEventsContent').style.display = 'block';
}

//Opens events week and hides all other panels
function showEventsWeek() {
  hidePanels();
  document.getElementById('eventsWeekContent').style.display = 'block';
}
