import type { GpuBufferSlice } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { GlTransientMemory } from '../../../../com/mojang/blaze3d/opengl/GlTransientMemory.d.ts'
export class GlTransientMemory$TransientGpuBuffer extends GlBuffer {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_HINT_CLIENT_STORAGE: number;
    static USAGE_INDEX: number;
    static USAGE_INDIRECT_PARAMETERS: number;
    static USAGE_MAP_READ: number;
    static USAGE_MAP_WRITE: number;
    static USAGE_UNIFORM: number;
    static USAGE_UNIFORM_TEXEL_BUFFER: number;
    static USAGE_VERTEX: number;
    constructor(null_: GlTransientMemory, handle: number, usage: number, size: number)
    // private bufferSubmitIndex: number;
    readonly closed: boolean;
    close(): void;
    isClosed(): boolean;
    map(read: boolean, write: boolean): GpuBufferSlice$MappedView;
    map(offset: number, length: number, read: boolean, write: boolean): GpuBufferSlice$MappedView;
    slice(): GpuBufferSlice;
    slice(offset: number, length: number): GpuBufferSlice;
}