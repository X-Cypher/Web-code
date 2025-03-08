import conf from '../config variables/conf'
import { Client, Databases, Query } from "appwrite"

//slug is the document id
class Posts{
    client = new Client()
    databases

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId)
        
        this.databases = new Databases(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
             {
                title,
                content,
                featuredImage,
                status,
                userId
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error :: ", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error :: ", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error :: ", error)
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error :: ", error)
            return false
        }
    }

    async getActivePosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.equal('status', 'active')]
            )
        } catch (error) {
            console.log("Appwrite service :: getActivePosts :: error :: ", error)
            return false
        }
    }

    async getAllPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId
            )
        } catch (error) {
            console.log("Appwrite service :: getAllPosts :: error :: ", error)
            return false
        }
    }
}

const posts = new Posts()
export default posts