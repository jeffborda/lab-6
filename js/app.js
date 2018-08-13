

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
    this.hourlyCookies.push(Math.floor(this.customersPerHour[i] * this.avgCookiesPer));
  }
};

firstAndPike.setTotalDailyCookies = function() {
  for(var i = 0; i < hoursOfOperation.length; i++) {
    this.totalDailyCookies += this.hourlyCookies[i];
  }
};

firstAndPike.setCustomersPerHour();
firstAndPike.setHourlyCookies();
firstAndPike.setTotalDailyCookies();

firstAndPike.render = function() {
  var firstAndPikeUlEl = document.getElementById('firstAndPike');
  for(var i = 0; i < this.hourlyCookies.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + ': ' + this.hourlyCookies[i] + ' cookies.';
    firstAndPikeUlEl.appendChild(liEl);
  }
};

firstAndPike.render();




// ::::: SeaTac Airport ::::: 

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  customersPerHour: [],
  avgCookiesPer: 1.2,
  dailyCustomers: [],
  hourlyCookies: [],
  totalDailyCookies: 0,

};