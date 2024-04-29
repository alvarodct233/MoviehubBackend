import dotenv from 'dotenv';

type TConfig = {
    [key:string]: EnvironmentConfig
}

type EnvironmentConfig = {
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
            URI: process.env.MONDOBD_URI || "mongodb://localhost:27017"
        },
        auth0: {
            client_origin: process.env.CLIENT_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 8081
        },
        db: {
            URI: process.env.MONDOBD_URI || "mongodb://localhost:27017"
        },
        auth0: {
            client_origin: process.env.CLIENT_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER
        }
    }   
}

export default CONFIG[ENV]
