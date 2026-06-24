import type { CleanerJava6$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CleanerJava6$CleanableDirectBufferImpl extends Object implements CleanableDirectBuffer {
    private constructor(arg0: ByteBuffer)
    constructor(arg0: ByteBuffer, arg1: CleanerJava6$1)
    // private buffer: ByteBuffer;
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}