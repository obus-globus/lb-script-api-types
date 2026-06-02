import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class GpuBuffer extends Object implements AutoCloseable {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_HINT_CLIENT_STORAGE: number;
    static USAGE_INDEX: number;
    static USAGE_MAP_READ: number;
    static USAGE_MAP_WRITE: number;
    static USAGE_UNIFORM: number;
    static USAGE_UNIFORM_TEXEL_BUFFER: number;
    static USAGE_VERTEX: number;
    constructor(usage: number, size: number)
    // private lb$slice: GpuBufferSlice;
    // private size: number;
    // private usage: number;
    close(): void;
    isClosed(): boolean;
    size(): number;
    slice(): GpuBufferSlice;
    slice(offset: number, length: number): GpuBufferSlice;
    usage(): number;
}