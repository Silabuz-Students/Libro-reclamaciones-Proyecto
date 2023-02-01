import { DefaultSession, DefaultUser } from "next-auth";
import type {Empresa} from "@prisma/client"
declare module "next-auth" {
    interface User  extends Empresa{
    }
    interface Session extends DefaultSession {
        user?: User;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
    }
}

