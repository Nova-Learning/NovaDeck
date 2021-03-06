// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  site: process.env.SITE || 'http://localhost:3000',

  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],

  secret: process.env.SECRET_KEY,

  pages: {
    signIn: '/auth/login',
    newUser: '/my?new=true'
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);