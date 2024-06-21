
import clientPromise from "@/database/mongoClientPromise"
import { userModel } from "@/models/user-model"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import bcrypt from "bcryptjs"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "jwt",
    },
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (credentials == null) return null;
                try {
                    const { email, password } = credentials
                    const user = await userModel.findOne({ email })
                    const isMatch = await bcrypt.compare(password, user.password);
                    if (isMatch) {
                        return user
                    } else {
                        throw new Error("Please check your credentials");
                    }
                } catch (error) {
                    throw new Error("Please check your credentials");
                }
            },
        }),
        Google,
        Facebook
    ],
})  