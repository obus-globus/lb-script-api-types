import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { MessageToByteEncoder } from '../../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { CompressionEncoderFactory } from '../../../../../io/netty/handler/codec/http/CompressionEncoderFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpContentCompressor$SnappyEncoderFactory extends Object implements CompressionEncoderFactory {
    private constructor()
    createEncoder(): MessageToByteEncoder<ByteBuf>;
}