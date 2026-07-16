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
    static addHeaderLenient(builder: Headers$Builder, line: string): Headers$Builder;
    static addHeaderLenient(builder: Headers$Builder, name: string, value: string): Headers$Builder;
    static applyConnectionSpec(connectionSpec: ConnectionSpec, sslSocket: SSLSocket, isFallback: boolean): void;
    static buildConnectionPool(connectionListener: ConnectionListener, taskRunner: TaskRunner): ConnectionPool;
    static cacheGet(cache: Cache, request: Request): Response | null;
    static charsetOrUtf8(self: MediaType | null): Charset;
    static chooseCharset(self: MediaType | null): Pair<Charset, MediaType>;
    static cookieToString(cookie: Cookie, forObsoleteRfc2965: boolean): string;
    static effectiveCipherSuites(self: ConnectionSpec, socketEnabledCipherSuites: string[]): string[];
    static getConnection(paramarg0: Response): RealConnection;
    static parseCookie(currentTimeMillis: number, url: HttpUrl, setCookie: string): Cookie | null;
    static taskRunnerInternal(self: OkHttpClient$Builder, taskRunner: TaskRunner): OkHttpClient$Builder;
}