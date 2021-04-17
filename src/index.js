let dayjs = require('dayjs');
let fs = require('fs')

module.exports = async function App(context) {
  await Record(context)
  if (context.event._rawEvent.message.text.toLowerCase() === 'no') {
    return Reset
  } else {

    if (context.session._state.count === 0) {
      return Intro
    } else if (context.session._state.count === 1) {
      return BirthDate
    } else if (context.session._state.count === 2
      && context.session._state.firstName) {
      return Decision
    } else if (context.session._state.count === 3
      && context.session._state.firstName
      && context.session._state.birthDate) {
      return Reveal
    } else {
      await context.sendText(`Sorry I don't understand your answer`)
    }
  }

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
    count: count,
    msg: context.event.text
  })
  await context.sendText('Hi');
  await context.sendText(`What's your first name?`)

}

async function BirthDate(context) {
  await context.sendText(`Hello ${context.event.text}, when your birthday ?
  (Use YYYY-MM-DD)`)
  context.setState({
    firstName: context.event.text,
    count: context.state.count + 1
  })
}

async function Decision(context) {
  await context.sendText(`so It's on ${context.event.text},
      You want to know how many days till your next?
      (Yes or no)`)
  context.setState({
    birthDate: context.event.text,
    count: context.state.count + 1
  })
  if (context.event.text.toLowerCase() === "no"
    || context.event.text.toLowerCase() === "nah") {
    return Reset
  }
}

async function Reveal(context) {

  const today = dayjs()
  let thisYear = dayjs().format('YYYY')
  let nextYear = dayjs(today).add(1, 'year').format('YYYY')

  let monthBirth = dayjs(context.state.birthDate).format('MM') // Month Birth
  let monthNow = dayjs(today).format('MM') // Month now

  let dayBirth = dayjs(context.state.birthDate).format('DD') // Day Birth
  let dayNow = dayjs(today).format('DD') // Day Now

  // For year used, if it pass will use next year, if not use this year
  let usedYear = ''
  if (monthBirth <= monthNow) {
    if (dayBirth > dayNow) {
      usedYear = thisYear
    }
    else {
      usedYear = nextYear
    }
  } else {
    usedYear = nextYear
  }


  // Formula to get day
  let exactBirth = dayjs(context.state.birthDate).year(usedYear).add(1, 'day')
  let time = exactBirth.diff(today, 'day').toString()
  await context.sendText(`There are ${time} days left until your next birthday`)

  await Reset(context)
}

async function Record(context) {
  let state = {
    id: 1,
    msg: context.event.text
  }
  fs.readFile(`./record.json`, `utf8`, (err, data) => {
    if (err) { res.send(err) }
    else {
      data = JSON.parse(data)
      let newId = data[data.length - 1].id + 1
      if (data.length > 0) {
        state.id = newId
      }
      data.push(state)
      let dataStr = JSON.stringify(data, null, 2)
      fs.writeFile(`./record.json`, dataStr, (err) => {
        if (err) { res.send(err) }
      })
    }
  })
}