'use strict';

var hoursOfOperation = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
var allLocations = [];
var salesTable = document.getElementById('stores');

function SalmonCookieStore(storeName, minCustomers, maxCustomers, avgCookiesPer) {
  this.storeName = storeName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPer = avgCookiesPer;
  this.customersPerHour = [];
  this.dailyCustomers = [];
  this.hourlyCookies = [];
  this.totalDailyCookies = 0;
  this.totalDailyCookies = 0;

  this.setCustomersPerHour();
  this.setHourlyCookies();
  this.setTotalDailyCookies();
  this.setTotalDailyCustomers();

  allLocations.push(this);
}

SalmonCookieStore.prototype.getRandomIntInclusive = function() {
  //Max and min are inclusive
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
};

SalmonCookieStore.prototype.setCustomersPerHour = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.customersPerHour.push(this.getRandomIntInclusive());
  }
};

SalmonCookieStore.prototype.setHourlyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.hourlyCookies.push(Math.round(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

SalmonCookieStore.prototype.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

SalmonCookieStore.prototype.setTotalDailyCustomers = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCustomers += this.customersPerHour[i];
  }
};

SalmonCookieStore.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.storeName;
  trEl.appendChild(tdEl);

  for(var i = 0; i < this.hourlyCookies.length; i++) {
    tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyCookies[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');
  tdEl.textContent = this.totalDailyCookies;
  trEl.appendChild(tdEl);
  salesTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'LOCATION';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
  for(var i = 0; i < hoursOfOperation.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOperation[i];
    trEl.appendChild(thEl);
    salesTable.appendChild(trEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'TOTAL';
  trEl.appendChild(thEl);
  salesTable.appendChild(trEl);
}

function renderAllLocations() {
  for(var i = 0; i < allLocations.length; i++) {
    allLocations[i].render();
  }
}


new SalmonCookieStore('First and Pike', 23, 65, 6.3);
new SalmonCookieStore('SeaTac Airport', 3, 24, 1.2);
new SalmonCookieStore('Seattle Center', 11, 38, 3.7);
new SalmonCookieStore('Capitol Hill', 20, 38, 2.3);
new SalmonCookieStore('Alki', 2, 16, 4.6);

makeHeaderRow();
renderAllLocations();