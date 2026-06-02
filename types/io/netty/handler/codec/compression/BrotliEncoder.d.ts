import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
export class BrotliEncoder extends MessageToByteEncoder<ByteBuf> {
}