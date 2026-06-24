import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { SignRenderState$SignTransformations } from '../../../../../../net/minecraft/client/renderer/blockentity/state/SignRenderState$SignTransformations.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { SignText } from '../../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
export class SignRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    backText: SignText;
    drawOutline: boolean;
    frontText: SignText;
    isTextFilteringEnabled: boolean;
    maxTextLineWidth: number;
    textLineHeight: number;
    transformations: SignRenderState$SignTransformations;
}