import type { File } from '../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
import type { CoroutineScope } from '../../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { Job } from '../../../../../kotlinx/coroutines/Job.d.ts'
import type { RequestBody } from '../../../../../okhttp3/RequestBody.d.ts'
import type { Response } from '../../../../../okhttp3/Response.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class HttpClientKt extends Object {
    static asForm(self: string): RequestBody;
    static getIoScope(): CoroutineScope;
    static getRenderScope(): CoroutineScope;
    /**
     * Parse body from {@link Response}.
     *
     * If {@link T} is one of following types, it should be closed after using:
     * {@link InputStream} / {@link BufferedSource} / {@link Reader}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L256 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:256}
     */
    static parse<T extends unknown>(self: Response): T;
    /**
     * Save response body to file.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L289 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:289}
     */
    static toFile(self: Response, file: File): number;
    /**
     * Read all UTF-8 lines from {@link BufferedSource} as an {@link Iterator}.
     *
     * When there are no more lines to read, the source is closed automatically.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt#L273 | src/main/kotlin/net/ccbluex/liquidbounce/api/core/HttpClient.kt:273}
     */
    static utf8Lines(self: BufferedSource): Iterator<string>;
    static withScope(block: (param0: CoroutineScope) => void): Job;
}