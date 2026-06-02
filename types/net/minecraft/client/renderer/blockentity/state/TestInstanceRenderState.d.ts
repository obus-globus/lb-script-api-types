import type { BeaconRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BeaconRenderState.d.ts'
import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { BlockEntityWithBoundingBoxRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityWithBoundingBoxRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { TestInstanceBlockEntity$ErrorMarker } from '../../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$ErrorMarker.d.ts'
export class TestInstanceRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    beaconRenderState: BeaconRenderState;
    blockEntityWithBoundingBoxRenderState: BlockEntityWithBoundingBoxRenderState;
    errorMarkers: TestInstanceBlockEntity$ErrorMarker[];
}