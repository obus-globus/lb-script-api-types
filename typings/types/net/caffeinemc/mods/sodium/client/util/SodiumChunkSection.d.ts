import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
export interface SodiumChunkSection extends Object{
    sodium$setRendering(arg0: SodiumWorldRenderer, arg1: ChunkRenderMatrices, arg2: number, arg3: number, arg4: number): void;
}