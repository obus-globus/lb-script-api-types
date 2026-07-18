import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class WriterScope extends Object implements CoroutineScope {
    constructor(channel: ByteWriteChannel, coroutineContext: CoroutineContext)
    readonly channel: ByteWriteChannel;
    readonly coroutineContext: CoroutineContext;
}