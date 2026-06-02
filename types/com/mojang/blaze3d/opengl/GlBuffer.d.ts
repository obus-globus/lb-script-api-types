import type { GpuBuffer } from '../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { DirectStateAccess } from '../../../../com/mojang/blaze3d/opengl/DirectStateAccess.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
export class GlBuffer extends GpuBuffer {
    static USAGE_COPY_DST: number;
    static USAGE_COPY_SRC: number;
    static USAGE_HINT_CLIENT_STORAGE: number;
    static USAGE_INDEX: number;
    static USAGE_MAP_READ: number;
    static USAGE_MAP_WRITE: number;
    static USAGE_UNIFORM: number;
    static USAGE_UNIFORM_TEXEL_BUFFER: number;
    static USAGE_VERTEX: number;
    constructor(label: () => string, dsa: DirectStateAccess, usage: number, size: number, handle: number, persistentBuffer: ByteBuffer)
    closed: boolean;
    // private dsa: DirectStateAccess;
    handle: number;
    // private label: () => string;
    // private persistentBuffer: ByteBuffer;
    close(): void;
    isClosed(): boolean;
}