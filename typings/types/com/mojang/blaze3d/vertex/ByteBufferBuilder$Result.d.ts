import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBufferBuilder$Result extends Object implements AutoCloseable {
    private constructor(null_: ByteBufferBuilder$Result, offset: number, capacity: number, generation: number)
    // private capacity: number;
    // private closed: boolean;
    // private generation: number;
    // private offset: number;
    byteBuffer(): ByteBuffer;
    close(): void;
}