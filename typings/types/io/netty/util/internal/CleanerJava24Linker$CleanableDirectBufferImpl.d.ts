import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CleanerJava24Linker$CleanableDirectBufferImpl extends Object implements CleanableDirectBuffer {
    private constructor(arg0: number)
    // private buffer: ByteBuffer;
    // private memoryAddress: number;
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}