import { AuthOptions, getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!,
        })
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, account, user }) {
            // Optionally add custom fields to the token
            if (account) {
                token.accessToken = account.access_token;
            }
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Optionally add custom fields to the session
            if (session.user) {
                (session.user as any).id = token.id;
            }
            (session as any).accessToken = token.accessToken;
            return session;
        },
    },
}

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession }