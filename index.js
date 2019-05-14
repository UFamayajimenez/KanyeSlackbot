const SlackBot = require('slackbots');
const axios = require('axios');


const myBot = new SlackBot({



  token: (insert impotant token here),


   name: 'kanye'


});

//Start Handler

myBot.on('start', () => {

  const params = {

    icon_emoji: ':money_mouth_face:'

  }

  myBot.postMessageToChannel('general', 'Who wants a Kanye quote?!', params);


});


//Error Handler
myBot.on('error', (err) => console.log(err));

//Message Handler
myBot.on('message', (data) => {


  console.log(data);

  if(data.type !== 'message'){
    return;
  }

  if(data.text.includes('kanye') || data.text.includes('Kanye') || data.text.includes('KANYE')){
    tellKanyeQuote();
  }



});



function tellKanyeQuote(){

axios.get('https://api.kanye.rest')
  .then(res => {
    const quote = res.data.quote;

    const params = {
      icon_emoji: ':money_mouth_face:'
    }

    myBot.postMessageToChannel('general', quote, params);
  })

}
