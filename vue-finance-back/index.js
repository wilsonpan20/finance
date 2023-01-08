const {prisma} = require('./generated/prisma-client')


async function main(){
  await prisma.createUser({
    name: 'Wilson',
    email:'wilson.evangelista22@gmail.com',
    password:'123456'
  })
  const users = await prisma.users()
  console.log('User',users)
}
main().catch(e => console.error(e))