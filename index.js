
const sid = '<Your sid token>'

const auth_token = '<Your auth_token>'

const twilio = require('twilio')(sid ,auth_token)

twilio.messages.create({
    from: '<Twilio phone number>',
    to: "<Enter your your number>",
    body: "my last message "
})
.then((res)=> console.log("Message has  been sent"))
.catch((e) => console.log('ERROR OCCURED'))
