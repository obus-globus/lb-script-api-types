import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CleanerJava25$CleanableDirectBufferImpl extends Object implements CleanableDirectBuffer {
    constructor(arg0: AutoCloseable, arg1: ByteBuffer, arg2: number)
    // private buffer: ByteBuffer;
    // private closeable: AutoCloseable;
    // private memoryAddress: number;
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
    memoryAddress(): number;
}