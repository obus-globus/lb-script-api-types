import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
export abstract class GlBuffer extends GpuBuffer {
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
    constructor(usage: number, size: number, handle: number, canPersistentMap: boolean)
    // private canPersistentMap: boolean;
    handle: number;
    // private mappingRefCount: number;
    checkCanBeUsed(): void;
}