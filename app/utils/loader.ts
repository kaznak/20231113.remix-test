export type Env = {
  AUTHORITY?: String;
  CLIENT_ID?: String;
  REDIRECT_URI?: String;
};

export async function envLoader(): Promise<Env> {
  const { AUTHORITY, CLIENT_ID, REDIRECT_URI } = process.env;
  return { AUTHORITY, CLIENT_ID, REDIRECT_URI };
}
