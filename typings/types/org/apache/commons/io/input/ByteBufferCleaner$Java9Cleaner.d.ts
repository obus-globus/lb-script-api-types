import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteBufferCleaner$Cleaner } from '../../../../../org/apache/commons/io/input/ByteBufferCleaner$Cleaner.d.ts'
export class ByteBufferCleaner$Java9Cleaner extends Object implements ByteBufferCleaner$Cleaner {
    private constructor()
    // private invokeCleaner: Method;
    // private theUnsafe: Object;
    clean(arg0: ByteBuffer): void;
}