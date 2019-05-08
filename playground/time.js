const moment = require('moment');

// Jan 1st 1970 00:00:10
// 10000
// var date = new Date();
// var months  = ['Jan', 'Feb'];
//
// console.log(date.getMonth());

// const date = moment(createdAt);
// date.add(1, 'year').subtract(9, 'months');
// console.log(date.format('MMM Do, YYYY'));

// 10:35am
// 6:01 am

const someTimestamp = moment().valueOf();
console.log(someTimestamp);

const createdAt = 1234;
const date = moment(createdAt);
console.log(date.format('h:mm a'));