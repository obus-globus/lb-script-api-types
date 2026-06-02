import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { CharsetEncoder } from '../../../../../../java/nio/charset/CharsetEncoder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
import type { Encoder } from '../../../../../../org/apache/logging/log4j/core/layout/Encoder.d.ts'
export class LockingStringBuilderEncoder extends Object implements Encoder<StringBuilder> {
    constructor(charset: Charset)
    constructor(charset: Charset, charBufferSize: number)
    // private cachedCharBuffer: CharBuffer;
    // private charset: Charset;
    // private charsetEncoder: CharsetEncoder;
    encode(source: StringBuilder, destination: ByteBufferDestination): void;
    // private getCharBuffer(): CharBuffer;
    // private logEncodeTextException(ex: Exception, text: StringBuilder, destination: ByteBufferDestination): void;
}