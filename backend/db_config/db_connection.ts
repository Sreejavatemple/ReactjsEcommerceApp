//return connection objet

import obj from "../config/config";
const db_password:any = `admin`;
const db_name:any=`mern`;
const db_url:any=`mongodb+srv://root:root@cluster0.4kxqb.mongodb.net/mern?retryWrites=true&w=majority`;

export default function getConnection(){
    try{
        return obj.mernClient.connect(db_url); 
    }catch(error){
        console.log("connection failed");
    }
};