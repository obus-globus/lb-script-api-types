import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class EnchantTableRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    flip: number;
    open: number;
    time: number;
    yRot: number;
}