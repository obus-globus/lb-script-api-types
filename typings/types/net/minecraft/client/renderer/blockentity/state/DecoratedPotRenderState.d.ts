import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { DecoratedPotBlockEntity$WobbleStyle } from '../../../../../../net/minecraft/world/level/block/entity/DecoratedPotBlockEntity$WobbleStyle.d.ts'
import type { PotDecorations } from '../../../../../../net/minecraft/world/level/block/entity/PotDecorations.d.ts'
export class DecoratedPotRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    decorations: PotDecorations;
    direction: Direction;
    wobbleProgress: number;
    wobbleStyle: DecoratedPotBlockEntity$WobbleStyle;
    yRot: number;
}