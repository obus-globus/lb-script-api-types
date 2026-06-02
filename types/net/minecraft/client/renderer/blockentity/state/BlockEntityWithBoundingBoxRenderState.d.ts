import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { BlockEntityWithBoundingBoxRenderState$InvisibleBlockType } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityWithBoundingBoxRenderState$InvisibleBlockType.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BoundingBoxRenderable$Mode } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$Mode.d.ts'
import type { BoundingBoxRenderable$RenderableBox } from '../../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable$RenderableBox.d.ts'
export class BlockEntityWithBoundingBoxRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    box: BoundingBoxRenderable$RenderableBox;
    invisibleBlocks: BlockEntityWithBoundingBoxRenderState$InvisibleBlockType[];
    isVisible: boolean;
    mode: BoundingBoxRenderable$Mode;
    structureVoids: (Object | null)[];
}