import { Client, Databases, Storage } from "appwrite";
import { appwriteConfig } from "./appwriteConfig";

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const databases = new Databases(client);
export const storage = new Storage(client);