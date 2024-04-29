
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.MoviesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  image: 'image',
  createAt: 'createAt',
  updateAt: 'updateAt',
  userId: 'userId'
};

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createAt: 'createAt',
  updateAt: 'updateAt'
};

exports.Prisma.MovieGenreScalarFieldEnum = {
  movieId: 'movieId',
  genreId: 'genreId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Movies: 'Movies',
  Genre: 'Genre',
  MovieGenre: 'MovieGenre'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\alvar\\alv-pro\\clones\\MoviehubBackend\\prisma\\generated\\postgres_client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.13.0",
  "engineVersion": "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRESQL_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\r\n    provider        = \"prisma-client-js\"\r\n    previewFeatures = [\"driverAdapters\"]\r\n    output          = \"./generated/postgres_client\"\r\n}\r\n\r\ndatasource db {\r\n    provider = \"postgresql\"\r\n    url      = env(\"POSTGRESQL_URL\")\r\n}\r\n\r\nmodel User {\r\n    id       Int      @id @default(autoincrement())\r\n    name     String   @db.VarChar(255)\r\n    email    String   @unique @db.VarChar(100)\r\n    password String   @db.VarChar(255)\r\n    createAt DateTime @default(now())\r\n    updateAt DateTime @updatedAt\r\n    movies   Movies[]\r\n}\r\n\r\nmodel Movies {\r\n    id       Int      @id @default(autoincrement())\r\n    name     String   @db.VarChar(255)\r\n    image    String   @db.VarChar(255)\r\n    createAt DateTime @default(now())\r\n    updateAt DateTime @updatedAt\r\n    userId   Int\r\n    user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)\r\n    genres   MovieGenre[]\r\n}\r\n\r\nmodel Genre {\r\n    id       Int      @id @default(autoincrement())\r\n    name     String   @db.VarChar(255)\r\n    createAt DateTime @default(now())\r\n    updateAt DateTime @updatedAt\r\n    movies   MovieGenre[]\r\n    }\r\n\r\nmodel MovieGenre {\r\n    movieId Int\r\n    genreId Int\r\n    movie   Movies @relation(fields: [movieId], references: [id])\r\n    genre   Genre  @relation(fields: [genreId], references: [id])\r\n\r\n    @@id([movieId, genreId])\r\n}",
  "inlineSchemaHash": "22981e294115ea187ce9e38d45989bd49f5342322ee6f5f85cd88c4e84fc68f6",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"movies\",\"kind\":\"object\",\"type\":\"Movies\",\"relationName\":\"MoviesToUser\"}],\"dbName\":null},\"Movies\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"MoviesToUser\"},{\"name\":\"genres\",\"kind\":\"object\",\"type\":\"MovieGenre\",\"relationName\":\"MovieGenreToMovies\"}],\"dbName\":null},\"Genre\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updateAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"movies\",\"kind\":\"object\",\"type\":\"MovieGenre\",\"relationName\":\"GenreToMovieGenre\"}],\"dbName\":null},\"MovieGenre\":{\"fields\":[{\"name\":\"movieId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"genreId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"movie\",\"kind\":\"object\",\"type\":\"Movies\",\"relationName\":\"MovieGenreToMovies\"},{\"name\":\"genre\",\"kind\":\"object\",\"type\":\"Genre\",\"relationName\":\"GenreToMovieGenre\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    return (await import('#wasm-engine-loader')).default
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    POSTGRESQL_URL: typeof globalThis !== 'undefined' && globalThis['POSTGRESQL_URL'] || typeof process !== 'undefined' && process.env && process.env.POSTGRESQL_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

