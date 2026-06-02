import type { File } from '../../../../../java/io/File.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { HttpMethod } from '../../../../../net/ccbluex/liquidbounce/api/core/HttpMethod.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:89}
     */
    static EMPTY_HEADERS: Pair<string, string>[];
    static INSTANCE: HttpClient;
    /**
     * API client
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L165 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:165}
     */
    static getClient(): OkHttpClient;
    static sendAsync(paramarg0: Call): CompletableFuture<Response>;
    DEFAULT_AGENT: string;
    EMPTY_HEADERS: Pair<string, string>[];
    // private client: OkHttpClient;
    /*not mapped: */ getClient(): OkHttpClient;
    // private clientHttpApiInterceptor: Interceptor;
    // private defaultClient: OkHttpClient;
    download(url: string, file: File, agent: string, progressListener: (param0: number, param1: number, param2: boolean) => void | null): number;
    request(url: string, method: HttpMethod, agent: string, headers: Function1<Headers$Builder, void>, body: RequestBody | null, progressListener: (param0: number, param1: number, param2: boolean) => void | null): Response;
}