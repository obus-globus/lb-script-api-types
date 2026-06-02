import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
import type { CharsetEncoder } from '../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
export class TextEncoderHelper extends Object {
    static encodeText(paramcharsetEncoder: CharsetEncoder, paramcharBuf: CharBuffer, parambyteBuf: ByteBuffer, paramtext: StringBuilder, paramdestination: ByteBufferDestination): void;
    static encodeText(paramcharsetEncoder: CharsetEncoder, paramcharBuf: CharBuffer, paramdestination: ByteBufferDestination): void;
    private constructor()
}