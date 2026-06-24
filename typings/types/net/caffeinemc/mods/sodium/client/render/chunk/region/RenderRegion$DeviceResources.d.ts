import type { GpuBuffer } from '../../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBufferArena } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/GlBufferArena.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/staging/StagingBuffer.d.ts'
export class RenderRegion$DeviceResources extends Object {
    constructor(arg0: StagingBuffer)
    readonly geometryArena: GlBufferArena;
    readonly indexArena: GlBufferArena;
    delete(): void;
    getGeometryArena(): GlBufferArena;
    getGeometryBuffer(): GpuBuffer;
    getIndexArena(): GlBufferArena;
    getIndexBuffer(): GpuBuffer;
    shouldDelete(): boolean;
}