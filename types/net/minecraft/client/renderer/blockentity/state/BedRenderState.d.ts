import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BedPart } from '../../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
export class BedRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    color: DyeColor;
    facing: Direction;
    part: BedPart;
}