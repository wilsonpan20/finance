const formatError = message => {
  const messageSplit = message.split(':')
  console.log(messageSplit)
  return messageSplit[messageSplit.length - 1].trim()
}

export {
  formatError
}
