interface Configuration {
    [key:string]: ENV
}

interface ENV {
    app: APP,
    db?: DB
    auth0: AUTH0
}

interface APP {
    PORT: number | string
}

interface DB{
    uri: string
}

interface AUTH0 {
    client_origin: string | undefined,
    audience: string | undefined,
    issuer: string | undefined
}


export default Configuration
