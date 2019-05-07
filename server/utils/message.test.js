const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Rommel';
    const text = 'Message';
    const message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
    // expect(message.from).toEqual(from);
    // expect(message.text).toEqual(text);
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Mel';
    const latitude = 15;
    const longitude = 19;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    const message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });
});