import type { File } from '../../../../../java/io/File.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { HttpMethod } from '../../../../../net/ccbluex/liquidbounce/api/core/HttpMethod.d.ts'
import type { MojangApiClient } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/MojangApiClient.d.ts'
import type { OkHttpProgressInterceptor$ProgressListener } from '../../../../../net/ccbluex/liquidbounce/mcef/listeners/OkHttpProgressInterceptor$ProgressListener.d.ts'
import type { Call } from '../../../../../okhttp3/Call.d.ts'
import type { Headers$Builder } from '../../../../../okhttp3/Headers$Builder.d.ts'
import type { Interceptor } from '../../../../../okhttp3/Interceptor.d.ts'
import type { OkHttpClient } from '../../../../../okhttp3/OkHttpClient.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
export class HttpClient extends Object {
    static DEFAULT_AGENT: string;
    /**
     * Unfortunately, Lunar Client uses OkHttp 4.12.0 which does not have {@link Headers.EMPTY}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:96}
     * @deprecated Use Headers.EMPTY instead when Lunar Client updates OkHttp to 5.10 or newer.
     */
    static EMPTY_HEADERS: Pair<string, string>[];
    static INSTANCE: HttpClient;
    /**
     * API client
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L176 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:176}
     */
    static getClient(): OkHttpClient;
    static getMojangApiClient(): MojangApiClient;
    static sendAsync(self: Call): CompletableFuture<Response>;
    DEFAULT_AGENT: string;
    EMPTY_HEADERS: Pair<string, string>[];
    // private client: OkHttpClient;
    /*not mapped: */ getClient(): OkHttpClient;
    // private clientHttpApiInterceptor: Interceptor;
    // private defaultClient: OkHttpClient;
    // private mojangApiClient: MojangApiClient;
    /*not mapped: */ getMojangApiClient(): MojangApiClient;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    download(url: string, file: File, agent: string, progressListener: ((param0: number, param1: number, param2: boolean) => void) | null, $completion: Continuation<number>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    request(url: string, method: HttpMethod, agent: string, headers: (param0: Headers$Builder) => void, body: RequestBody | null, progressListener: ((param0: number, param1: number, param2: boolean) => void) | null, $completion: Continuation<Response>): any;
}