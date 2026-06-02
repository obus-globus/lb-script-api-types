import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemStackRenderState } from '../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class ShelfRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    alignToBottom: boolean;
    facing: Direction;
    items: ItemStackRenderState[];
}