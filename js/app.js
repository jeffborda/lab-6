'use strict';

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];



// ::::: First and Pike ::::: 

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPer: 6.3,
  customersPerHour: [],
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,
  totalDailyCustomers: 0,
};

firstAndPike.getRandomIntInclusive = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //The maximum is inclusive and the minimum is inclusive
};

firstAndPike.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

firstAndPike.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    //console.log(Math.ceiling(this.customersPerHour[i] * this.avgCookiesPer));//TESTING
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

firstAndPike.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

firstAndPike.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};



firstAndPike.render = function() {
  var firstAndPikeUlEl = document.getElementById('firstAndPike');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    firstAndPikeUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  firstAndPikeUlEl.appendChild(liElTotalCookies);
};

firstAndPike.setCustomersPerHour();
firstAndPike.setHourlyCookies();
firstAndPike.setTotalDailyCookies();
firstAndPike.setTotalDailyCustomers();

firstAndPike.render();




// ::::: SeaTac Airport ::::: 

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPer: 1.2,
  customersPerHour: [],
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,
  totalDailyCustomers: 0,
};

seaTacAirport.getRandomIntInclusive = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //The maximum is inclusive and the minimum is inclusive
};

seaTacAirport.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

seaTacAirport.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    //console.log(Math.ceiling(this.customersPerHour[i] * this.avgCookiesPer));//TESTING
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

seaTacAirport.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

seaTacAirport.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};

seaTacAirport.setCustomersPerHour();
seaTacAirport.setHourlyCookies();
seaTacAirport.setTotalDailyCookies();
seaTacAirport.setTotalDailyCustomers();

seaTacAirport.render = function() {
  var seaTacAirportUlEl = document.getElementById('seaTacAirport');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    seaTacAirportUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  seaTacAirportUlEl.appendChild(liElTotalCookies);
};

seaTacAirport.render();




// :::::: Seattle Center ::::::

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPer: 3.7,
  customersPerHour: [],
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,
  totalDailyCustomers: 0,
};

seattleCenter.getRandomIntInclusive = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //The maximum is inclusive and the minimum is inclusive
};

seattleCenter.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

seattleCenter.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    //console.log(Math.ceiling(this.customersPerHour[i] * this.avgCookiesPer));//TESTING
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

seattleCenter.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

seattleCenter.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};

seattleCenter.setCustomersPerHour();
seattleCenter.setHourlyCookies();
seattleCenter.setTotalDailyCookies();
seattleCenter.setTotalDailyCustomers();

seattleCenter.render = function() {
  var seattleCenterUlEl = document.getElementById('seattleCenter');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    seattleCenterUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  seattleCenterUlEl.appendChild(liElTotalCookies);
};

seattleCenter.render();




// :::::: Capitol Hill ::::::

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPer: 2.3,
  customersPerHour: [],
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,
  totalDailyCustomers: 0,
};

capitolHill.getRandomIntInclusive = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //The maximum is inclusive and the minimum is inclusive
};

capitolHill.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

capitolHill.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    //console.log(Math.ceiling(this.customersPerHour[i] * this.avgCookiesPer));//TESTING
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

capitolHill.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

capitolHill.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};

capitolHill.setCustomersPerHour();
capitolHill.setHourlyCookies();
capitolHill.setTotalDailyCookies();
capitolHill.setTotalDailyCustomers();

capitolHill.render = function() {
  var capitolHillUlEl = document.getElementById('capitolHill');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    capitolHillUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  capitolHillUlEl.appendChild(liElTotalCookies);
};

capitolHill.render();




// :::::: Alki ::::::

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPer: 4.6,
  customersPerHour: [],
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,
  totalDailyCustomers: 0,
};

alki.getRandomIntInclusive = function() {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers; //The maximum is inclusive and the minimum is inclusive
};

alki.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

alki.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    //console.log(Math.ceiling(this.customersPerHour[i] * this.avgCookiesPer));//TESTING
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

alki.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

alki.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};

alki.setCustomersPerHour();
alki.setHourlyCookies();
alki.setTotalDailyCookies();
alki.setTotalDailyCustomers();

alki.render = function() {
  var alkiUlEl = document.getElementById('alki');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    alkiUlEl.appendChild(liEl);
  }
  var liElTotalCookies = document.createElement('li');
  liElTotalCookies.textContent = 'Total: ' + this.totalDailyCookies + ' cookies.';
  alkiUlEl.appendChild(liElTotalCookies);
};

alki.render();