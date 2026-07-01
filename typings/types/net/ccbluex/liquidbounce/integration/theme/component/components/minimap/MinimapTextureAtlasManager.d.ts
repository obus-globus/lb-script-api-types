import type { ReentrantReadWriteLock } from '../../../../../../../../java/util/concurrent/locks/ReentrantReadWriteLock.d.ts'
import type { BiConsumer } from '../../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinimapTextureAtlasManager$AtlasPosition } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager$AtlasPosition.d.ts'
import type { TextureSetup } from '../../../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { DynamicTexture } from '../../../../../../../../net/minecraft/client/renderer/texture/DynamicTexture.d.ts'
export class MinimapTextureAtlasManager extends Object {
    constructor()
    // private allocated: boolean;
    // private availableAtlasPositions: MinimapTextureAtlasManager$AtlasPosition[];
    // private chunkPosAtlasPosMap: { [key: string]: any };
    // private dirtyAtlasPositions: MinimapTextureAtlasManager$AtlasPosition[];
    // private lock: ReentrantReadWriteLock;
    // private texture: DynamicTexture;
    // private allocate(chunkPos: number): MinimapTextureAtlasManager$AtlasPosition;
    deallocate(chunkPos: number): void;
    deallocateAll(): void;
    editChunk(chunkPos: number, editor: (param0: DynamicTexture, param1: MinimapTextureAtlasManager$AtlasPosition) => void): void;
    get(chunkPos: number): MinimapTextureAtlasManager$AtlasPosition | null;
    // private getOrAllocate(chunkPos: number): MinimapTextureAtlasManager$AtlasPosition;
    getOrNotLoadedTexture(chunkPos: number): MinimapTextureAtlasManager$AtlasPosition;
    /**
     * Uploads texture changes to the GPU
     *
     * @returns the {@link TextureSetup} of the texture
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt#L140 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt:140}
     */
    prepareRendering(): TextureSetup;
    // private uploadFullTexture(): void;
    // private uploadOnlyDirtyPositions(): void;
}