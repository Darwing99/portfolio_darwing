import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

const Whatsapp=()=> {

    return (
        <FloatingWhatsApp 
        phoneNumber='98739415'
        avatar='https://avatars.githubusercontent.com/u/70980484?v=4'
         accountName='Darwing Hernandez' 
         allowClickAway notification
        darkMode
         chatMessage='Hola Amigo! Que tal en que puedo ayudarte?'
         notificationDelay={60000}
            // 1 minute
         notificationSound
        />
    )
}
export default Whatsapp;