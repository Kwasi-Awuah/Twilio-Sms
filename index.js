
const sid = 'ACd0c5201b55c3972808334b6d2a368092'

const auth_token = '0caf73078ca459147ac35b389eb49646'

const twilio = require('twilio')(sid ,auth_token)

twilio.messages.create({
    from: '+16206589313',
    to: "+2330201487955",
    body: "ma last message "
})
.then((res)=> console.log("Message has  been sent"))
.catch((e) => console.log('ERROR OCCURED'))
