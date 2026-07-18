import type { ByteReadChannel } from '../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class ByteChannelsKt extends Object {
    static copyToBoth(self: ByteReadChannel, first: ByteWriteChannel, second: ByteWriteChannel): void;
    static split(self: ByteReadChannel, coroutineScope: CoroutineScope): Pair<ByteReadChannel, ByteReadChannel>;
}