This is a [Next.js](https://nextjs.org/) project 
## Instalacion Local del proyecto

Crear un archivo .env.local   y .env en la raiz del proyecto . Debe estar actualizado con los valores que se encuentran en .env.example

```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
NEXTAUTH_URL=http://localhost:3000/
TWILIO_ACCOUNT_SID = ""
TWILIO_AUTH_TOKEN = ""
TWILIO_PHONE_NUMBER = ""
```

Instalar nuevas dependencias
```bash
npm install
```

Generar el cliente de prisma y/o migraciones
```bash
npx migrate dev
npx prisma generate 
```

Para acceder al registro ingresar al endpoint y registrar los datos
```bash
http://localhost:3000/auth/register
```

Para acceder al loginingresar al endpoint y registrar los datos
```bash
http://localhost:3000/auth/login
```
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
