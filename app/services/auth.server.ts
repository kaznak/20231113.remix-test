import { Authenticator } from "remix-auth";
import { OAuth2Strategy } from "remix-auth-oauth2";
import type { SessionData } from "~/services/session";
import { sessionStorage } from "~/services/session";

export const authenticator = new Authenticator<SessionData>(sessionStorage);

authenticator.use(
  new OAuth2Strategy(
    {
      authorizationURL: "https://provider.com/oauth2/authorize",
      tokenURL: "https://provider.com/oauth2/token",
      clientID: process.env.CLIENT_ID || "",
      clientSecret: process.env.CLIENT_SECRET || "",
      callbackURL: "https://example.app/auth/callback",
      scope: "openid email profile", // optional
      useBasicAuthenticationHeader: false, // defaults to false
    },
    async ({
      accessToken,
      refreshToken,
      extraParams,
      profile,
      context,
      request,
    }) => {
      // here you can use the params above to get the user and return it
      // what you do inside this and how you find the user is up to you
      return await getUser(
        accessToken,
        refreshToken,
        extraParams,
        profile,
        context,
        request,
      );
    },
  ),
  // this is optional, but if you setup more than one OAuth2 instance you will
  // need to set a custom name to each one
  "provider-name",
);
