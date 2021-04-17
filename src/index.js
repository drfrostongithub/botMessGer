let dayjs = require('dayjs');

module.exports = async function App(context) {
  if (context.event._rawEvent.message.text.toLowerCase() === 'no') {
    return Reset
  } else {

    if (context.session._state.count === 0) {
      console.log(context.event)
      return Intro
    } else if (context.session._state.count === 1) {
      return BirthDate
    } else if (context.session._state.count === 2 && context.session._state.firstName) {
      return Decision
    } else if (context.session._state.count === 3
      && context.session._state.firstName
      && context.session._state.birthDate) {
      return Reveal
    } else {
      await context.sendText(`Sorry I don't understand your answer`)
    }
  }

  console.log(context.session)
};

async function Reset(context) {
  context.setState({
    count: 0
  })
  let wave = '👋'
  await context.sendText(`Goodbye ${wave}`)
}

async function Intro(context) {
  const count = context.state.count + 1;
  context.setState({
    count
  })
  await context.sendText('Hi');
  await context.sendText(`What's your first name?`)

}

async function BirthDate(context) {
  await context.sendText(`Hello ${context.event.text}, when your birthday ?`)
  context.setState({
    firstName: context.event.text,
    count: context.state.count + 1
  })
}

async function Decision(context) {
  await context.sendText(`so It's on ${context.event.text},
      You want to know how many days till his your nextH?`)
  context.setState({
    birthDate: context.event.text,
    count: context.state.count + 1
  })
  if (context.event.text.toLowerCase() === "no" || context.event.text.toLowerCase() === "nah") {
    return Reset
  }
}

async function Reveal(context) {

  let today = dayjs()
  let nextYear = dayjs(context.state.birthDate).add(1, 'year').add(1, 'day')
  let time = today.diff(nextYear, 'month').toString()

  await context.sendText(`There are ${time} days left until your next birthday`)

  await Reset
}