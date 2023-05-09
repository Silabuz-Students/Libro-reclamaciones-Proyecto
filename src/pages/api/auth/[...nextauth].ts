import NextAuth, { User } from "next-auth"

import CredentialsProvider from "next-auth/providers/credentials";
import { Session } from "next-auth";
import jwt, { JWT } from "next-auth/jwt"

const urlbase = process.env.NEXTAUTH_URL
type props = {
    token: JWT,
    session: Session
    user: User
}
type jwtProps = {
    token: JWT,
    user?: User
}
export const authOptions = {
    secret: 'sdsds',
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },
            
            async authorize(credentials, req) {
                const { email, password } = credentials as { email: string, password: string }
                const res = await fetch(`${urlbase}/api/users/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                });
                
                const user :User = await res.json();
                if (res.ok && user) {
                    return user ;
                } else return null;
            },
        }),


        // ...add more providers here
    ],

    pages: {
        signIn: '/auth/signin',       
    },

    callbacks: {
        async jwt({ token, user }: jwtProps) {
            /* Step 1: update the token based on the user object */
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session({ session, token }: props) {
            /* Step 2: update the session.user based on the token object */
            if (token && session.user) {
                session.user.id = token.id;
            }
            return session;
        },

    }
    
}
export default NextAuth(authOptions);