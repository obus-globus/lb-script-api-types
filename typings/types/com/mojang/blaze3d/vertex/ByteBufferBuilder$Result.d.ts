import type { ByteBufferBuilder } from '../../../../com/mojang/blaze3d/vertex/ByteBufferBuilder.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ByteBufferBuilder$Result extends Object implements AutoCloseable {
    private constructor(null_: ByteBufferBuilder, offset: number, size: number, generation: number)
    // private closed: boolean;
    // private generation: number;
    // private offset: number;
    // private size: number;
    byteBuffer(): ByteBuffer;
    close(): void;
    size(): number;
}