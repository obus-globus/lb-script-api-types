import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinimapHeightmapManager } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapHeightmapManager.d.ts'
import type { MinimapTextureAtlasManager } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager.d.ts'
import type { MinimapTextureAtlasManager$AtlasPosition } from '../../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/minimap/MinimapTextureAtlasManager$AtlasPosition.d.ts'
import type { TextureSetup } from '../../../../../../../../net/minecraft/client/gui/render/TextureSetup.d.ts'
import type { Vector2ic } from '../../../../../../../../org/joml/Vector2ic.d.ts'
export class ChunkRenderer extends Object {
    static INSTANCE: ChunkRenderer;
    static SUN_DIRECTION: Vector2ic;
    SUN_DIRECTION: Vector2ic;
    // private heightmapManager: MinimapHeightmapManager;
    // private textureAtlasManager: MinimapTextureAtlasManager;
    getAtlasPosition(chunkPos: number): MinimapTextureAtlasManager$AtlasPosition;
    prepareRendering(): TextureSetup;
    unloadEverything(): void;
}