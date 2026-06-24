import type { GpuBuffer } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class MappedStagingBuffer$MappedBuffer extends Record {
    private constructor(buffer: GpuBuffer, map: GpuBufferSlice$MappedView, mapAddr: number)
    // private buffer: GpuBuffer;
    // private map: GpuBufferSlice$MappedView;
    // private mapAddr: number;
    buffer(): GpuBuffer;
    delete(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    map(): GpuBufferSlice$MappedView;
    mapAddr(): number;
    toString(): string;
    write(arg0: ByteBuffer, arg1: number): void;
}