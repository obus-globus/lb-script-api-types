import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { SSLSocket } from '../../javax/net/ssl/SSLSocket.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Cache } from '../../okhttp3/Cache.d.ts'
import type { ConnectionPool } from '../../okhttp3/ConnectionPool.d.ts'
import type { ConnectionSpec } from '../../okhttp3/ConnectionSpec.d.ts'
import type { Cookie } from '../../okhttp3/Cookie.d.ts'
import type { Headers$Builder } from '../../okhttp3/Headers$Builder.d.ts'
import type { HttpUrl } from '../../okhttp3/HttpUrl.d.ts'
import type { MediaType } from '../../okhttp3/MediaType.d.ts'
import type { OkHttpClient$Builder } from '../../okhttp3/OkHttpClient$Builder.d.ts'
import type { Request } from '../../okhttp3/Request.d.ts'
import type { Response } from '../../okhttp3/Response.d.ts'
import type { TaskRunner } from '../../okhttp3/internal/concurrent/TaskRunner.d.ts'
import type { ConnectionListener } from '../../okhttp3/internal/connection/ConnectionListener.d.ts'
import type { RealConnection } from '../../okhttp3/internal/connection/RealConnection.d.ts'
export class Internal extends Object {
    static addHeaderLenient(paramarg0: Headers$Builder, paramarg1: string): Headers$Builder;
    static addHeaderLenient(paramarg0: Headers$Builder, paramarg1: string, paramarg2: string): Headers$Builder;
    static applyConnectionSpec(paramarg0: ConnectionSpec, paramarg1: SSLSocket, paramarg2: boolean): void;
    static buildConnectionPool(paramarg0: ConnectionListener, paramarg1: TaskRunner): ConnectionPool;
    static cacheGet(paramarg0: Cache, paramarg1: Request): Response;
    static charsetOrUtf8(paramarg0: MediaType): Charset;
    static chooseCharset(paramarg0: MediaType): Pair<Charset, MediaType>;
    static cookieToString(paramarg0: Cookie, paramarg1: boolean): string;
    static effectiveCipherSuites(paramarg0: ConnectionSpec, paramarg1: (Object | null)[]): (Object | null)[];
    static getConnection(paramarg0: Response): RealConnection;
    static parseCookie(paramarg0: number, paramarg1: HttpUrl, paramarg2: string): Cookie;
    static taskRunnerInternal(paramarg0: OkHttpClient$Builder, paramarg1: TaskRunner): OkHttpClient$Builder;
}