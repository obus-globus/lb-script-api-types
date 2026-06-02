import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { MapRenderState } from '../../../../net/minecraft/client/renderer/state/MapRenderState.d.ts'
import type { MapRenderState$MapDecorationRenderState } from '../../../../net/minecraft/client/renderer/state/MapRenderState$MapDecorationRenderState.d.ts'
import type { TextureAtlas } from '../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { MapTextureManager } from '../../../../net/minecraft/client/resources/MapTextureManager.d.ts'
import type { AtlasManager } from '../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { MapDecoration } from '../../../../net/minecraft/world/level/saveddata/maps/MapDecoration.d.ts'
import type { MapId } from '../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
import type { MapItemSavedData } from '../../../../net/minecraft/world/level/saveddata/maps/MapItemSavedData.d.ts'
export class MapRenderer extends Object {
    static HEIGHT: number;
    static WIDTH: number;
    constructor(atlasManager: AtlasManager, mapTextureManager: MapTextureManager)
    // private decorationSprites: TextureAtlas;
    // private mapTextureManager: MapTextureManager;
    // private extractDecorationRenderState(decoration: MapDecoration): MapRenderState$MapDecorationRenderState;
    extractRenderState(mapId: MapId, mapData: MapItemSavedData, mapRenderState: MapRenderState): void;
    render(mapRenderState: MapRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, showOnlyFrame: boolean, lightCoords: number): void;
}