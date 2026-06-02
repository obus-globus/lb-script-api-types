import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BeaconRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BeaconRenderer.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityWithBoundingBoxRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityWithBoundingBoxRenderer.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { TestInstanceRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/TestInstanceRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { TestInstanceBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { TestInstanceBlockEntity$ErrorMarker } from '../../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity$ErrorMarker.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TestInstanceRenderer extends Object implements BlockEntityRenderer<TestInstanceBlockEntity, TestInstanceRenderState> {
    constructor()
    // private beacon: BeaconRenderer<TestInstanceBlockEntity>;
    // private box: BlockEntityWithBoundingBoxRenderer<TestInstanceBlockEntity>;
    createRenderState(): TestInstanceRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: TestInstanceBlockEntity, state: TestInstanceRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRender(blockEntity: TestInstanceBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: TestInstanceRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    // private submitErrorMarker(error: TestInstanceBlockEntity$ErrorMarker): void;
}