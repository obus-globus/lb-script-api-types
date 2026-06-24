import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuBufferSlice extends Record {
    constructor(buffer: GpuBuffer, offset: number, length: number)
    // private buffer: GpuBuffer;
    // private length: number;
    // private offset: number;
    buffer(): GpuBuffer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    length(): number;
    map(read: boolean, write: boolean): GpuBufferSlice$MappedView;
    offset(): number;
    slice(offset: number, length: number): GpuBufferSlice;
    toString(): string;
}