const errorHandler = (error, vm, info) => {
  console.log('Vue [error handler]', error, info)
  const jwtErrors = ['jwt malformed', 'jwt expired', 'jwt not active', 'invalid token']
  if (jwtErrors.some(jwtError => error.message.includes(jwtError))) {
    vm.$router.push({
      path: '/login',
      query: { redirect: vm.$route.path }
    })
  }
}

const formatError = message => {
  const messageSplit = message.split(':')
  console.log(messageSplit)
  return messageSplit[messageSplit.length - 1].trim()
}

export {
  formatError,
  errorHandler
}
