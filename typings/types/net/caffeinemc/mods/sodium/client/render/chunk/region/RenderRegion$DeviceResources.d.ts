import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBufferArena } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/GlBufferArena.d.ts'
import type { StagingBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/arena/staging/StagingBuffer.d.ts'
import type { GlBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlBufferStreamer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferStreamer.d.ts'
import type { CommandList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/CommandList.d.ts'
import type { GlTessellation } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlTessellation.d.ts'
export class RenderRegion$DeviceResources extends Object {
    constructor(arg0: CommandList, arg1: StagingBuffer)
    // private chunkFades: GlBufferStreamer;
    readonly geometryArena: GlBufferArena;
    readonly indexArena: GlBufferArena;
    readonly indexedTessellation: GlTessellation;
    readonly tessellation: GlTessellation;
    delete(arg0: CommandList): void;
    deleteIndexedTessellation(arg0: CommandList): void;
    deleteTessellation(arg0: CommandList): void;
    getGeometryArena(): GlBufferArena;
    getGeometryBuffer(): GlBuffer;
    getIndexArena(): GlBufferArena;
    getIndexBuffer(): GlBuffer;
    getIndexedTessellation(): GlTessellation;
    getTessellation(): GlTessellation;
    prepareChunkData(arg0: CommandList): GlBuffer;
    shouldDelete(): boolean;
    updateIndexedTessellation(arg0: CommandList, arg1: GlTessellation): void;
    updateTessellation(arg0: CommandList, arg1: GlTessellation): void;
    writeMeshTimes(arg0: number, arg1: number): void;
}