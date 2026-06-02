import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkBuildBuffers } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildBuffers.d.ts'
import type { BlockRenderCache } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/pipeline/BlockRenderCache.d.ts'
import type { ChunkVertexType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/vertex/format/ChunkVertexType.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
export class ChunkBuildContext extends Object {
    constructor(arg0: ClientLevel, arg1: ChunkVertexType)
    buffers: ChunkBuildBuffers;
    cache: BlockRenderCache;
    cleanup(): void;
}