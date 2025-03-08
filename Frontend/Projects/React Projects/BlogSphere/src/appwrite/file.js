import conf from "../config variables/conf";
import { Client, ID, Storage } from "appwrite";

class File {
    client = new Client()
    storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId)

        this.storage = new Storage(this.client)
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error :: ", error)
            
        }
    }

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error :: ", error)
        }
    }
    // we did not use async await here because getFilePreview function does not return a promise (according to the documentation)
    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("Appwrite service :: getFilePreview :: error :: ", error)
        }
    }
}

const file = new File()
export default file