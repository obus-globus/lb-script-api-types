import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ChestRenderState$ChestMaterialType } from '../../../../../../net/minecraft/client/renderer/blockentity/state/ChestRenderState$ChestMaterialType.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { ChestType } from '../../../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
export class ChestRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    facing: Direction;
    material: ChestRenderState$ChestMaterialType;
    open: number;
    type: ChestType;
}