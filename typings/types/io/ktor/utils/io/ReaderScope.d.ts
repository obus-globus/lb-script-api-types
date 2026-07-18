import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class ReaderScope extends Object implements CoroutineScope {
    constructor(channel: ByteReadChannel, coroutineContext: CoroutineContext)
    readonly channel: ByteReadChannel;
    readonly coroutineContext: CoroutineContext;
}