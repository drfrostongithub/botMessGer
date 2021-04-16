module.exports = async function App(context) {
  let idSender = context.event._rawEvent.sender.id 
  if (idSender) {
    let firstRes = await context.sendText('Hi');

    if (firstRes) {
      await context.sendText(`Who's your name ?`)
    }
  }


  console.log(context.event)
};
