import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { HeightmapForChunk } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/HeightmapForChunk.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MinimapHeightmapManager extends Object {
    constructor()
    // private heightmaps: Map<ChunkPos, HeightmapForChunk>;
    getHeight(x: number, z: number): number;
    // private getHeightmap(chunkPos: ChunkPos): HeightmapForChunk;
    unloadAllChunks(): void;
    unloadChunk(chunkPos: ChunkPos): void;
    updateChunk(chunkPos: ChunkPos): void;
    /**
     * @returns true if the heightmap was changed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHeightmapManager.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHeightmapManager.kt:60}
     */
    updatePosition(pos: BlockPos, newState: BlockState): boolean;
}