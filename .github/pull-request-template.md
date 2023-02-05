# [Libro de Reclamaciones Virtual - Proyecto Unidad 8-9](https://github.com/Silabuz-Students/Libro-reclamaciones-Proyecto)
## Descripción
Se agregan los siguientes cambios para el presente pull request.

Se instaló dependencias:

- bcrypt                         => para el hash de los password

- next-auth                    => para la authenticacion del usuario

## Tipo de cambio
- [x] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

## Como hacer prueba de los cambios?
En el archivo .env.local se debe estar actualizado con los valores que se encuentran en .env.example
```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
NEXTAUTH_URL=http://localhost:3000/
```

Instalar nuevas dependencias
```bash
npm install
```

Generar el cliente de prisma
```bash
npx prisma generate 
```

Para acceder al registro ingresar al endpoint y registrar los datos
```bash
http://localhost:3000/auth/register
```