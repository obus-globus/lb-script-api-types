import type { ByteBufferCleaner$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteBufferCleaner$Cleaner } from '../../../../../org/apache/commons/io/input/ByteBufferCleaner$Cleaner.d.ts'
export class ByteBufferCleaner$Java8Cleaner extends Object implements ByteBufferCleaner$Cleaner {
    private constructor()
    constructor(arg0: ByteBufferCleaner$1)
    // private cleanMethod: Method;
    // private cleanerMethod: Method;
    clean(arg0: ByteBuffer): void;
}