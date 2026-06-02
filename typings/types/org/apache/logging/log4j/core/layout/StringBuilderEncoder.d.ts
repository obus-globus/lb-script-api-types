import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { ThreadLocal } from '../../../../../../java/lang/ThreadLocal.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ByteBufferDestination } from '../../../../../../org/apache/logging/log4j/core/layout/ByteBufferDestination.d.ts'
import type { Encoder } from '../../../../../../org/apache/logging/log4j/core/layout/Encoder.d.ts'
export class StringBuilderEncoder extends Object implements Encoder<StringBuilder> {
    constructor(charset: Charset)
    constructor(charset: Charset, charBufferSize: number, byteBufferSize: number)
    // private byteBufferSize: number;
    // private charBufferSize: number;
    // private charset: Charset;
    // private threadLocal: ThreadLocal<Object[]>;
    encode(source: StringBuilder, destination: ByteBufferDestination): void;
    // private getThreadLocalState(): Object[];
}