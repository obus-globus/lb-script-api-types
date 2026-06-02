import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CompressionEncoderFactory extends Object{
    createEncoder(): MessageToByteEncoder<ByteBuf>;
}