import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
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
    // private chunkPosAtlasPosMap: JavaMap<any, any>;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt#L140 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.kt:140}
     */
    prepareRendering(): TextureSetup;
    // private uploadFullTexture(): void;
    // private uploadOnlyDirtyPositions(): void;
}