import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class HttpClientKt extends Object {
    static asForm(paramarg0: string): RequestBody;
    static getIoScope(): CoroutineScope;
    static getRenderScope(): CoroutineScope;
    /**
     * Parse body from {@link Response}.
     *
     * If {@link T} is one of following types, it should be closed after using:
     * {@link InputStream} / {@link BufferedSource} / {@link Reader}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:233}
     */
    static parse(paramarg0: Response): Object | null;
    /**
     * Save response body to file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L269 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:269}
     */
    static toFile(paramarg0: Response, paramarg1: File): number;
    /**
     * Read all UTF-8 lines from {@link BufferedSource} as an {@link Iterator}.
     *
     * When there are no more lines to read, the source is closed automatically.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L251 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:251}
     */
    static utf8Lines(paramarg0: BufferedSource): Iterator<string>;
    static withScope(paramarg0: Function2<Object, Object, Object>): Job;
}