import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class FileChannelsAtNioPathKt extends Object {
    static readChannel(self: Path, start: number, endInclusive: number, coroutineContext: CoroutineContext): ByteReadChannel;
}