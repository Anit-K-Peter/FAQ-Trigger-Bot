const fs = require('fs');

module.exports = {
  name: 'quest',
  description: 'Add a new FAQ entry',
  execute(message, args) {
    if (args.length < 2) {
      return message.reply('You need to provide a question and an answer.!quest [question] [answer]');
    }

    const question = args[0];
    const answer = args.slice(1).join(' ');
    fs.readFile('./faq.json', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading faq.json:', err);
        return message.reply('There was an error reading the FAQ data.');
      }

      const faqData = JSON.parse(data);
      faqData[question] = answer;
      fs.writeFile('./faq.json', JSON.stringify(faqData, null, 2), err => {
        if (err) {
          console.error('Error writing to faq.json:', err);
          return message.reply('There was an error saving the FAQ data.');
        }

        message.reply(`The FAQ entry for "${question}" has been added.`);
      });
    });
  }
};
