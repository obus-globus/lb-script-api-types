import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { MapRenderState } from '../../../../../../net/minecraft/client/renderer/state/MapRenderState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { MapId } from '../../../../../../net/minecraft/world/level/saveddata/maps/MapId.d.ts'
export class ItemFrameRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    direction: Direction;
    frameModel: BlockModelRenderState;
    isGlowFrame: boolean;
    item: ItemStackRenderState;
    mapId: MapId;
    mapRenderState: MapRenderState;
    rotation: number;
}