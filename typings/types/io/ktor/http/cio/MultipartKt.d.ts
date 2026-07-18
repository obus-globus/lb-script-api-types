import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { MultipartEvent } from '../../../../io/ktor/http/cio/MultipartEvent.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class MultipartKt extends Object {
    static parseBoundaryInternal(contentType: CharSequence): number[];
    static parseMultipart(self: CoroutineScope, input: ByteReadChannel, headers: HttpHeadersMap, maxPartSize: number): ReceiveChannel<MultipartEvent>;
    static parseMultipart(self: CoroutineScope, input: ByteReadChannel, contentType: CharSequence, contentLength: number | null, maxPartSize: number): ReceiveChannel<MultipartEvent>;
}