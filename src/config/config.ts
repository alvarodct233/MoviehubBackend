import dotenv from 'dotenv';

type TConfig = {
    [key:string]: EnvironmentConfig
}

type EnvironmentConfig = {
    cloudinary: CloudinaryConfig;
    app: AppConfig
    db: DbConfig
    auth0: Auth0Config,
}

type AppConfig = {
    PORT: string | number
}

type DbConfig = {
    URI: string
}

type Auth0Config = {
    client_origin: string |  undefined, 
    audience: string | undefined,
    issuer: string | undefined,
}

type CloudinaryConfig = {
    cloudinary_cloud_name: string;
    api_key: string;
    api_secret: string;
};

if(process.env.NODE_ENV === "production"){
    dotenv.config({path: ".env.production"})
}else {
    dotenv.config({path: ".env.development"})
}

const ENV = process.env.NODE_ENV ?? "development";

export const CONFIG: TConfig = {
    development:{
        app:{
            PORT: process.env.PORT || 5716
        },
        db: {
            URI: process.env.POSTGRESQL_URL || "postgresql://neondb_owner:GL3ut4TcNXAW@ep-green-voice-a53kdczn.us-east-2.aws.neon.tech/neondb?sslmode=require"
        },
        auth0: {
            client_origin: process.env.AUTH0_CLIENT_ID,
            audience: process.env.AUTH0_BASE_URL,
            issuer: process.env.AUTH0_ISSUER_BASE_URL
        },
        cloudinary: {
            cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "error",
            api_key: process.env.CLOUDINARY_API_KEY || "error",
            api_secret: process.env.CLOUDINARY_API_SECRET || "error",
        },
    },
    production: {
        app: {
            PORT: process.env.PORT || 8081
        },
        db: {
            URI: process.env.MONDOBD_URI || "mongodb://localhost:27017"
        },
        auth0: {
            client_origin: process.env.AUTH0_CLIENT_ID,
            audience: process.env.AUTH0_BASE_URL,
            issuer: process.env.AUTH0_ISSUER_BASE_URL
        },
        cloudinary: {
            cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "error",
            api_key: process.env.CLOUDINARY_API_KEY || "error",
            api_secret: process.env.CLOUDINARY_API_SECRET || "error",
        },
    }   
}

export default CONFIG[ENV]
