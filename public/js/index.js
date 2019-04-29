var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Rommel',
    text: 'Yup, that works for me.'
  });

  // socket.emit('createEmail', {
  //   to: 'rommel@example.com',
  //   text: 'Hey. This is Rommel.'
  // });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

// socket.on('newEmail', function (email) {
//   console.log('New email', email);
// });