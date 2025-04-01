import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Admin from "@/lib/models/admin";
import dbConnect from "@/lib/dbConnect";
import { compare } from "bcryptjs";
import { Session } from "next-auth";

interface CustomUser {
  id: string;
  name: string;
  mobileNumber: string;
}

interface CustomSession extends Session {
  user: {
    id: string;
    name: string;
    mobileNumber: string;
  };
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        mobileNumber: { label: "Mobile Number", type: "text", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials?: Record<"mobileNumber" | "password", string>) {
        if (!credentials?.mobileNumber || !credentials?.password) {
          throw new Error("Mobile number and password are required");
        }

        console.log("Connecting to DB...");
        await dbConnect();

        const admin = await Admin.findOne({ mobileNumber: credentials.mobileNumber });
        if (!admin) {
          throw new Error("Admin not found");
        }

        const isValid = await compare(credentials.password, admin.password);
        if (!isValid) {
          throw new Error("Invalid credentials");
        }

        return {
          id: admin._id.toString(),
          name: admin.name,
          mobileNumber: admin.mobileNumber,
        } as CustomUser;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/", // Custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as CustomUser;
        token.id = customUser.id;
        token.name = customUser.name;
        token.mobileNumber = customUser.mobileNumber;
      }
      return token;
    },

    async session({ session, token }) {
      const customSession = session as CustomSession;
      customSession.user = {
        id: token.id as string,
        name: token.name as string,
        mobileNumber: token.mobileNumber as string,
      };
      return customSession;
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
