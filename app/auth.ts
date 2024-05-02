import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from 'next/headers'
import cookie from 'cookie';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`http://localhost:9090/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        })
        let setCookie = authResponse.headers.get('Set-Cookie');
        console.log('set-cookie', setCookie);
        if (setCookie) {
          const parsed = cookie.parse(setCookie);
          cookies().set('connect.sid', parsed['connect.sid'], parsed); // 브라우저에 쿠키를 심어주는 것
        }
        if (!authResponse.ok) {
          return null
        }

        const user = await authResponse.json()
        console.log('user', user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        }
      },
    }),
  ]
});