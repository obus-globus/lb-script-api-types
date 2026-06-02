import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GpuBufferSlice extends Record {
    // private buffer: GpuBuffer;
    // private length: number;
    // private offset: number;
    buffer(): GpuBuffer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    length(): number;
    offset(): number;
    slice(offset: number, length: number): GpuBufferSlice;
    toString(): string;
}