import twilio from 'twilio';

let PHONE_NUMBER = 'phoneNumber';

const client =  twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);



export default async function enviarSMS (phoneNumber: string,){
  try{
    const message = await client.messages.create({
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: `Hola Gracias por tu registro en Libro Reclamaciones Virtual `
    });
    return (message) ;

  } catch(error){
    console.log(error);
    return error;
  }
};
  

