
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ratings
 * 
 */
export type ratings = $Result.DefaultSelection<Prisma.$ratingsPayload>
/**
 * Model rating
 * 
 */
export type rating = $Result.DefaultSelection<Prisma.$ratingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Ratings
 * const ratings = await prisma.ratings.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Ratings
   * const ratings = await prisma.ratings.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ratings`: Exposes CRUD operations for the **ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.ratingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.ratingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ratings: 'ratings',
    rating: 'rating'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ratings" | "rating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ratings: {
        payload: Prisma.$ratingsPayload<ExtArgs>
        fields: Prisma.ratingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ratingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ratingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findFirst: {
            args: Prisma.ratingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ratingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findMany: {
            args: Prisma.ratingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          create: {
            args: Prisma.ratingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          createMany: {
            args: Prisma.ratingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ratingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          delete: {
            args: Prisma.ratingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          update: {
            args: Prisma.ratingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          deleteMany: {
            args: Prisma.ratingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ratingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ratingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          upsert: {
            args: Prisma.ratingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.ratingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ratingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
      rating: {
        payload: Prisma.$ratingPayload<ExtArgs>
        fields: Prisma.ratingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ratingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ratingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          findFirst: {
            args: Prisma.ratingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ratingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          findMany: {
            args: Prisma.ratingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>[]
          }
          create: {
            args: Prisma.ratingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          createMany: {
            args: Prisma.ratingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ratingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>[]
          }
          delete: {
            args: Prisma.ratingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          update: {
            args: Prisma.ratingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          deleteMany: {
            args: Prisma.ratingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ratingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ratingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>[]
          }
          upsert: {
            args: Prisma.ratingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.ratingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ratingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    ratings?: ratingsOmit
    rating?: ratingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    movie_id: number | null
  }

  export type RatingsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    movie_id: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    user_id: number
    movie_id: number
    recommend: number
    seen: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
  }

  export type RatingsSumAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to aggregate.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type ratingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithAggregationInput | ratingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: number
    user_id: number | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends ratingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type ratingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectScalar = {
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }

  export type ratingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "movie_id" | "recommend" | "seen", ExtArgs["result"]["ratings"]>

  export type $ratingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ratings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      movie_id: number | null
      recommend: string | null
      seen: string | null
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type ratingsGetPayload<S extends boolean | null | undefined | ratingsDefaultArgs> = $Result.GetResult<Prisma.$ratingsPayload, S>

  type ratingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ratingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface ratingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ratings'], meta: { name: 'ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {ratingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ratingsFindUniqueArgs>(args: SelectSubset<T, ratingsFindUniqueArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ratingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ratingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ratingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ratingsFindFirstArgs>(args?: SelectSubset<T, ratingsFindFirstArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ratingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ratingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ratingsFindManyArgs>(args?: SelectSubset<T, ratingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ratings.
     * @param {ratingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends ratingsCreateArgs>(args: SelectSubset<T, ratingsCreateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {ratingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ratingsCreateManyArgs>(args?: SelectSubset<T, ratingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {ratingsCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ratingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ratingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ratings.
     * @param {ratingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends ratingsDeleteArgs>(args: SelectSubset<T, ratingsDeleteArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ratings.
     * @param {ratingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ratingsUpdateArgs>(args: SelectSubset<T, ratingsUpdateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {ratingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ratingsDeleteManyArgs>(args?: SelectSubset<T, ratingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ratingsUpdateManyArgs>(args: SelectSubset<T, ratingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {ratingsUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ratingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ratingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ratings.
     * @param {ratingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends ratingsUpsertArgs>(args: SelectSubset<T, ratingsUpsertArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingsCountArgs>(
      args?: Subset<T, ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ratingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ratingsGroupByArgs['orderBy'] }
        : { orderBy?: ratingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ratingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ratings model
   */
  readonly fields: ratingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ratingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ratings model
   */
  interface ratingsFieldRefs {
    readonly id: FieldRef<"ratings", 'Int'>
    readonly user_id: FieldRef<"ratings", 'Int'>
    readonly movie_id: FieldRef<"ratings", 'Int'>
    readonly recommend: FieldRef<"ratings", 'String'>
    readonly seen: FieldRef<"ratings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ratings findUnique
   */
  export type ratingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findUniqueOrThrow
   */
  export type ratingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findFirst
   */
  export type ratingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findFirstOrThrow
   */
  export type ratingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findMany
   */
  export type ratingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings create
   */
  export type ratingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data needed to create a ratings.
     */
    data?: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
  }

  /**
   * ratings createMany
   */
  export type ratingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ratings createManyAndReturn
   */
  export type ratingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ratings update
   */
  export type ratingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data needed to update a ratings.
     */
    data: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
    /**
     * Choose, which ratings to update.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings updateMany
   */
  export type ratingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * ratings updateManyAndReturn
   */
  export type ratingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * ratings upsert
   */
  export type ratingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The filter to search for the ratings to update in case it exists.
     */
    where: ratingsWhereUniqueInput
    /**
     * In case the ratings found by the `where` argument doesn't exist, create a new ratings with this data.
     */
    create: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
    /**
     * In case the ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
  }

  /**
   * ratings delete
   */
  export type ratingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Filter which ratings to delete.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings deleteMany
   */
  export type ratingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to delete.
     */
    limit?: number
  }

  /**
   * ratings without action
   */
  export type ratingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
  }


  /**
   * Model rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    movie_id: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    movie_id: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    user_id: number
    movie_id: number
    recommend: number
    seen: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    movie_id?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    movie_id?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    user_id?: true
    movie_id?: true
    recommend?: true
    seen?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rating to aggregate.
     */
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingOrderByWithRelationInput | ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type ratingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingWhereInput
    orderBy?: ratingOrderByWithAggregationInput | ratingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: ratingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    user_id: string | null
    movie_id: number | null
    recommend: string | null
    seen: string | null
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends ratingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type ratingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["rating"]>

  export type ratingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["rating"]>

  export type ratingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }, ExtArgs["result"]["rating"]>

  export type ratingSelectScalar = {
    id?: boolean
    user_id?: boolean
    movie_id?: boolean
    recommend?: boolean
    seen?: boolean
  }

  export type ratingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "movie_id" | "recommend" | "seen", ExtArgs["result"]["rating"]>

  export type $ratingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rating"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string | null
      movie_id: number | null
      recommend: string | null
      seen: string | null
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type ratingGetPayload<S extends boolean | null | undefined | ratingDefaultArgs> = $Result.GetResult<Prisma.$ratingPayload, S>

  type ratingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ratingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface ratingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rating'], meta: { name: 'rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {ratingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ratingFindUniqueArgs>(args: SelectSubset<T, ratingFindUniqueArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ratingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ratingFindUniqueOrThrowArgs>(args: SelectSubset<T, ratingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ratingFindFirstArgs>(args?: SelectSubset<T, ratingFindFirstArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ratingFindFirstOrThrowArgs>(args?: SelectSubset<T, ratingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ratingFindManyArgs>(args?: SelectSubset<T, ratingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {ratingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends ratingCreateArgs>(args: SelectSubset<T, ratingCreateArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {ratingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ratingCreateManyArgs>(args?: SelectSubset<T, ratingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {ratingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ratingCreateManyAndReturnArgs>(args?: SelectSubset<T, ratingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {ratingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends ratingDeleteArgs>(args: SelectSubset<T, ratingDeleteArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {ratingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ratingUpdateArgs>(args: SelectSubset<T, ratingUpdateArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {ratingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ratingDeleteManyArgs>(args?: SelectSubset<T, ratingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ratingUpdateManyArgs>(args: SelectSubset<T, ratingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {ratingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ratingUpdateManyAndReturnArgs>(args: SelectSubset<T, ratingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {ratingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends ratingUpsertArgs>(args: SelectSubset<T, ratingUpsertArgs<ExtArgs>>): Prisma__ratingClient<$Result.GetResult<Prisma.$ratingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingCountArgs>(
      args?: Subset<T, ratingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ratingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ratingGroupByArgs['orderBy'] }
        : { orderBy?: ratingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ratingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rating model
   */
  readonly fields: ratingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ratingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rating model
   */
  interface ratingFieldRefs {
    readonly id: FieldRef<"rating", 'Int'>
    readonly user_id: FieldRef<"rating", 'String'>
    readonly movie_id: FieldRef<"rating", 'Int'>
    readonly recommend: FieldRef<"rating", 'String'>
    readonly seen: FieldRef<"rating", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rating findUnique
   */
  export type ratingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter, which rating to fetch.
     */
    where: ratingWhereUniqueInput
  }

  /**
   * rating findUniqueOrThrow
   */
  export type ratingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter, which rating to fetch.
     */
    where: ratingWhereUniqueInput
  }

  /**
   * rating findFirst
   */
  export type ratingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter, which rating to fetch.
     */
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingOrderByWithRelationInput | ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * rating findFirstOrThrow
   */
  export type ratingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter, which rating to fetch.
     */
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingOrderByWithRelationInput | ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * rating findMany
   */
  export type ratingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingOrderByWithRelationInput | ratingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * rating create
   */
  export type ratingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * The data needed to create a rating.
     */
    data?: XOR<ratingCreateInput, ratingUncheckedCreateInput>
  }

  /**
   * rating createMany
   */
  export type ratingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ratings.
     */
    data: ratingCreateManyInput | ratingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rating createManyAndReturn
   */
  export type ratingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * The data used to create many ratings.
     */
    data: ratingCreateManyInput | ratingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rating update
   */
  export type ratingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * The data needed to update a rating.
     */
    data: XOR<ratingUpdateInput, ratingUncheckedUpdateInput>
    /**
     * Choose, which rating to update.
     */
    where: ratingWhereUniqueInput
  }

  /**
   * rating updateMany
   */
  export type ratingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingUpdateManyMutationInput, ratingUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * rating updateManyAndReturn
   */
  export type ratingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingUpdateManyMutationInput, ratingUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * rating upsert
   */
  export type ratingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * The filter to search for the rating to update in case it exists.
     */
    where: ratingWhereUniqueInput
    /**
     * In case the rating found by the `where` argument doesn't exist, create a new rating with this data.
     */
    create: XOR<ratingCreateInput, ratingUncheckedCreateInput>
    /**
     * In case the rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingUpdateInput, ratingUncheckedUpdateInput>
  }

  /**
   * rating delete
   */
  export type ratingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
    /**
     * Filter which rating to delete.
     */
    where: ratingWhereUniqueInput
  }

  /**
   * rating deleteMany
   */
  export type ratingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingWhereInput
    /**
     * Limit how many ratings to delete.
     */
    limit?: number
  }

  /**
   * rating without action
   */
  export type ratingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rating
     */
    select?: ratingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rating
     */
    omit?: ratingOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    movie_id: 'movie_id',
    recommend: 'recommend',
    seen: 'seen'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    movie_id: 'movie_id',
    recommend: 'recommend',
    seen: 'seen'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ratingsWhereInput = {
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    id?: IntFilter<"ratings"> | number
    user_id?: IntNullableFilter<"ratings"> | number | null
    movie_id?: IntNullableFilter<"ratings"> | number | null
    recommend?: StringNullableFilter<"ratings"> | string | null
    seen?: StringNullableFilter<"ratings"> | string | null
  }

  export type ratingsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    movie_id?: SortOrderInput | SortOrder
    recommend?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
  }

  export type ratingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    user_id?: IntNullableFilter<"ratings"> | number | null
    movie_id?: IntNullableFilter<"ratings"> | number | null
    recommend?: StringNullableFilter<"ratings"> | string | null
    seen?: StringNullableFilter<"ratings"> | string | null
  }, "id">

  export type ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    movie_id?: SortOrderInput | SortOrder
    recommend?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    _count?: ratingsCountOrderByAggregateInput
    _avg?: ratingsAvgOrderByAggregateInput
    _max?: ratingsMaxOrderByAggregateInput
    _min?: ratingsMinOrderByAggregateInput
    _sum?: ratingsSumOrderByAggregateInput
  }

  export type ratingsScalarWhereWithAggregatesInput = {
    AND?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    OR?: ratingsScalarWhereWithAggregatesInput[]
    NOT?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ratings"> | number
    user_id?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    movie_id?: IntNullableWithAggregatesFilter<"ratings"> | number | null
    recommend?: StringNullableWithAggregatesFilter<"ratings"> | string | null
    seen?: StringNullableWithAggregatesFilter<"ratings"> | string | null
  }

  export type ratingWhereInput = {
    AND?: ratingWhereInput | ratingWhereInput[]
    OR?: ratingWhereInput[]
    NOT?: ratingWhereInput | ratingWhereInput[]
    id?: IntFilter<"rating"> | number
    user_id?: StringNullableFilter<"rating"> | string | null
    movie_id?: IntNullableFilter<"rating"> | number | null
    recommend?: StringNullableFilter<"rating"> | string | null
    seen?: StringNullableFilter<"rating"> | string | null
  }

  export type ratingOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    movie_id?: SortOrderInput | SortOrder
    recommend?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
  }

  export type ratingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ratingWhereInput | ratingWhereInput[]
    OR?: ratingWhereInput[]
    NOT?: ratingWhereInput | ratingWhereInput[]
    user_id?: StringNullableFilter<"rating"> | string | null
    movie_id?: IntNullableFilter<"rating"> | number | null
    recommend?: StringNullableFilter<"rating"> | string | null
    seen?: StringNullableFilter<"rating"> | string | null
  }, "id">

  export type ratingOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    movie_id?: SortOrderInput | SortOrder
    recommend?: SortOrderInput | SortOrder
    seen?: SortOrderInput | SortOrder
    _count?: ratingCountOrderByAggregateInput
    _avg?: ratingAvgOrderByAggregateInput
    _max?: ratingMaxOrderByAggregateInput
    _min?: ratingMinOrderByAggregateInput
    _sum?: ratingSumOrderByAggregateInput
  }

  export type ratingScalarWhereWithAggregatesInput = {
    AND?: ratingScalarWhereWithAggregatesInput | ratingScalarWhereWithAggregatesInput[]
    OR?: ratingScalarWhereWithAggregatesInput[]
    NOT?: ratingScalarWhereWithAggregatesInput | ratingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rating"> | number
    user_id?: StringNullableWithAggregatesFilter<"rating"> | string | null
    movie_id?: IntNullableWithAggregatesFilter<"rating"> | number | null
    recommend?: StringNullableWithAggregatesFilter<"rating"> | string | null
    seen?: StringNullableWithAggregatesFilter<"rating"> | string | null
  }

  export type ratingsCreateInput = {
    user_id?: number | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingsUpdateInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsCreateManyInput = {
    id?: number
    user_id?: number | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingsUpdateManyMutationInput = {
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingCreateInput = {
    user_id?: string | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingUncheckedCreateInput = {
    id?: number
    user_id?: string | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingUpdateInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingCreateManyInput = {
    id?: number
    user_id?: string | null
    movie_id?: number | null
    recommend?: string | null
    seen?: string | null
  }

  export type ratingUpdateManyMutationInput = {
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ratingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableStringFieldUpdateOperationsInput | string | null
    movie_id?: NullableIntFieldUpdateOperationsInput | number | null
    recommend?: NullableStringFieldUpdateOperationsInput | string | null
    seen?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
  }

  export type ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ratingCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingAvgOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
  }

  export type ratingMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    movie_id?: SortOrder
    recommend?: SortOrder
    seen?: SortOrder
  }

  export type ratingSumOrderByAggregateInput = {
    id?: SortOrder
    movie_id?: SortOrder
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}