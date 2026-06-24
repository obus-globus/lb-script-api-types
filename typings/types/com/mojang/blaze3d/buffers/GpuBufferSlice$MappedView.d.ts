import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuBufferSlice$MappedView extends Record implements AutoCloseable {
    constructor(slice: GpuBufferSlice, data: ByteBuffer, onClose: () => void)
    // private data: ByteBuffer;
    // private onClose: () => void;
    // private slice: GpuBufferSlice;
    close(): void;
    data(): ByteBuffer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    onClose(): () => void;
    slice(): GpuBufferSlice;
    toString(): string;
}