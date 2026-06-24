import type { GpuBufferSlice$MappedView } from '../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { GlBuffer } from '../../../../com/mojang/blaze3d/opengl/GlBuffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class GlBuffer$Direct extends GlBuffer {
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
    constructor(dsa: DirectStateAccess, usage: number, size: number, handle: number, canPersistentMap: boolean)
    readonly closed: boolean;
    // private dsa: DirectStateAccess;
    // private mappedBuffer: ByteBuffer;
    // private mappingFlags: number;
    close(): void;
    isClosed(): boolean;
    map(read: boolean, write: boolean): GpuBufferSlice$MappedView;
    map(offset: number, length: number, read: boolean, write: boolean): GpuBufferSlice$MappedView;
    // private unmap(): void;
}