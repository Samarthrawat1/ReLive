import { Client, Account, Storage, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6485e4c85b0d57207621");

export const account = new Account(client);

//Storage
export const storage = new Storage(client);

export const database = new Databases(client);
