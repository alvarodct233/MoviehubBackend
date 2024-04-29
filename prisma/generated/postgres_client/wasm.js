
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
 * Prisma Client JS version: 5.12.1
 * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
 */
Prisma.prismaVersion = {
  client: "5.12.1",
  engine: "473ed3124229e22d881cb7addf559799debae1ab"
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
      "value": "C:\\Users\\alvar\\assembler\\backend\\movie-hub-backend\\Backend\\prisma\\generated\\postgres_client",
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
  "clientVersion": "5.12.1",
  "engineVersion": "473ed3124229e22d881cb7addf559799debae1ab",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "POSTGRESQL_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n    provider        = \"prisma-client-js\"\n    previewFeatures = [\"driverAdapters\"]\n    output          = \"./generated/postgres_client\"\n}\n\ndatasource db {\n    provider = \"postgresql\"\n    url      = env(\"POSTGRESQL_URL\")\n}\n\nmodel User {\n    id       Int      @id @default(autoincrement())\n    name     String   @db.VarChar(255)\n    email    String   @unique @db.VarChar(100)\n    password String   @db.VarChar(255)\n    createAt DateTime @default(now())\n    updateAt DateTime @updatedAt\n    movies   Movies[]\n}\n\nmodel Movies {\n    id       Int      @id @default(autoincrement())\n    name     String   @db.VarChar(255)\n    image    String   @db.VarChar(255)\n    createAt DateTime @default(now())\n    updateAt DateTime @updatedAt\n    userId   Int\n    user     User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n    genres   MovieGenre[]\n}\n\nmodel Genre {\n    id       Int      @id @default(autoincrement())\n    name     String   @db.VarChar(255)\n    createAt DateTime @default(now())\n    updateAt DateTime @updatedAt\n    movies   MovieGenre[]\n    }\n\nmodel MovieGenre {\n    movieId Int\n    genreId Int\n    movie   Movies @relation(fields: [movieId], references: [id])\n    genre   Genre  @relation(fields: [genreId], references: [id])\n\n    @@id([movieId, genreId])\n}",
  "inlineSchemaHash": "0f4005dd27182e9dba771f59c374582ee28e5e76d4ff423c50fbad6b5029e357",
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

