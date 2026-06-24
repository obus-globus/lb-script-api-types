import type { CleanableDirectBuffer } from '../../../../io/netty/util/internal/CleanableDirectBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DirectCleaner$CleanableDirectBufferImpl extends Object implements CleanableDirectBuffer {
    constructor(arg0: ByteBuffer)
    constructor(arg0: number)
    // private buffer: ByteBuffer;
    buffer(): ByteBuffer;
    clean(): void;
    hasMemoryAddress(): boolean;
    memoryAddress(): number;
}