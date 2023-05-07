import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
      }),
    ],
    pages: {
      signIn: "/signin",
    },
    secret: process.env.NEXTAUTH_SECRET,
    // secret is only required for production environments
  }

  export default NextAuth(authOptions)