
// This file is used to store all the env variables that are used in the application.
// The configuration variables are stored in the .env file and are accessed using the import.meta.env object.
// converted to string to avoid any datatype errors

const conf = {
    appwriteEndpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}



export default conf