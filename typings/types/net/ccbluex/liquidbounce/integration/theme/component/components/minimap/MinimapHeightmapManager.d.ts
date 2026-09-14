import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { HeightmapForChunk } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/HeightmapForChunk.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MinimapHeightmapManager extends Object {
    constructor()
    // private heightmaps: JavaMap<ChunkPos, HeightmapForChunk>;
    getHeight(x: number, z: number): number;
    // private getHeightmap(chunkPos: ChunkPos): HeightmapForChunk;
    unloadAllChunks(): void;
    unloadChunk(chunkPos: ChunkPos): void;
    updateChunk(chunkPos: ChunkPos): void;
    /**
     * @returns true if the heightmap was changed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHeightmapManager.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHeightmapManager.kt:60}
     */
    updatePosition(pos: BlockPos, newState: BlockState): boolean;
}