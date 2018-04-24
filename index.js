const TelegramBot = require('node-telegram-bot-api');
const moment = require('moment');
const token = '569364404:AAFBUgpMszA13Hb9rdeJpoX2JOIcURxYuWo';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, moment().format('MMMM Do YYYY, h:mm:ss'));
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage('@marisa_channel', "Welcome");
});

bot.onText(/\/sendpic/, (msg) => {
  bot.sendPhoto('@marisa_channel', "https://static.zerochan.net/Kirisame.Marisa.full.285723.jpg" );
});

setInterval(() => {
  bot.sendMessage('@marisa_channel', moment().format('MMMM Do YYYY, h:mm:ss'));
}, 3000);
