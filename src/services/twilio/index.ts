import twilio from 'twilio';

let PHONE_NUMBER = 'phoneNumber';

const client =  twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);


function genereteCode(){
  return Math.floor(1000 +Math.random()*9000);
}

export default async function enviarSMS (phoneNumber: string,  body: string){
  try{
    const code = genereteCode();
    const message = await client.messages.create({
      to: phoneNumber,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: `Hola tu codigo de verificacion es ${code} `
    });
    return (message) ;

  } catch(error){
    console.log(error);
    return error;
  }
};
  

