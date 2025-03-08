import conf from "../config variables/conf";
import {Client, Account, ID} from "appwrite"

class AuthService{
    client = new Client();
    account 

    constructor(){
        this.client
            .setEndpoint(conf.appwriteEndpoint)
            .setProject(conf.appwriteProjectId)
        
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            //agar account ban gaya toh login kar do
            //agar account nahi ban paya toh jo mila wo return karo
            if(userAccount){
                return this.login({email, password})
            } else{
                return userAccount
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }
    }

    async logout(){
        try{
            await this.account.deleteSession("current") //sir used deleteSessions instead of deleteSession
        } catch(error){
            console.log("Appwrite :: logout :: error", error)
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite :: getCurrentUser :: error", error)
        }
        return null
    }
}


//pehle se object bna ke export kar diad
const authService = new AuthService();
export default authService;
