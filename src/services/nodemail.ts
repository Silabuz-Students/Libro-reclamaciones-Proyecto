export async function sendEmail(nombr:string, emai: string, nseguimiento: string) {
    const body = {
        "nombres": nombr,
        "email":emai,
        "nro_seguimiento": nseguimiento,
    }

    const res =  await fetch ("https://send-mail-cesar177.vercel.app/api/sendmail", { 
        body: JSON.stringify(body),
        method: "POST"
    })
    const data = await res.json();

    console.log(data);

    if (res.status == 200){
        console.log(data);
    }
    else {
        console.log("Error de envio");
    }
}