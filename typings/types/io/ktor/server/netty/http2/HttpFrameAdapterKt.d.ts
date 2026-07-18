import type { ByteWriteChannel } from '../../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Http2DataFrame } from '../../../../../io/netty/handler/codec/http2/Http2DataFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ReceiveChannel } from '../../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class HttpFrameAdapterKt extends Object {
    static http2frameLoop(self: ReceiveChannel<Http2DataFrame>, bc: ByteWriteChannel): void;
}