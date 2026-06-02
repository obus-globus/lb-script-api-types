import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SodiumWorldRenderer } from '../../../../../../net/caffeinemc/mods/sodium/client/render/SodiumWorldRenderer.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
export interface LevelRendererExtension extends Object{
    sodium$getMatrices(): ChunkRenderMatrices;
    sodium$getWorldRenderer(): SodiumWorldRenderer;
    sodium$setMatrices(arg0: ChunkRenderMatrices): void;
}