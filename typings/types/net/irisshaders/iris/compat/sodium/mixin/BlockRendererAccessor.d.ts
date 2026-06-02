import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkBuildBuffers } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/ChunkBuildBuffers.d.ts'
export interface BlockRendererAccessor extends Object{
    getBuffers(): ChunkBuildBuffers;
}