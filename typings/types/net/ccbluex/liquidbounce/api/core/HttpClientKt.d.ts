import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class HttpClientKt extends Object {
    static asForm(string: string): RequestBody;
    static getIoScope(): CoroutineScope;
    static getRenderScope(): CoroutineScope;
    /**
     * Parse body from {@link Response}.
     *
     * If {@link T} is one of following types, it should be closed after using:
     * {@link InputStream} / {@link BufferedSource} / {@link Reader}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L233 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:233}
     */
    static parse(response: Response): Object | null;
    /**
     * Save response body to file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L269 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:269}
     */
    static toFile(response: Response, file: File): number;
    /**
     * Read all UTF-8 lines from {@link BufferedSource} as an {@link Iterator}.
     *
     * When there are no more lines to read, the source is closed automatically.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L251 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:251}
     */
    static utf8Lines(bufferedSource: BufferedSource): Iterator<string>;
    static withScope(block: (param0: Object, param1: Object) => Object): Job;
}