import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { BlockEntityWithBoundingBoxRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityWithBoundingBoxRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BoundingBoxRenderable } from '../../../../../net/minecraft/world/level/block/entity/BoundingBoxRenderable.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockEntityWithBoundingBoxRenderer<T extends BlockEntity & BoundingBoxRenderable> extends Object implements BlockEntityRenderer<T, BlockEntityWithBoundingBoxRenderState> {
    static STRUCTURE_VOIDS_COLOR: number;
    static extract(paramblockEntity: Object | null, paramstate: BlockEntityWithBoundingBoxRenderState): void;
    constructor()
    createRenderState(): BlockEntityWithBoundingBoxRenderState;
    extractRenderState<S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: T, state: BlockEntityWithBoundingBoxRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    // private renderInvisibleBlocks(state: BlockEntityWithBoundingBoxRenderState, localPos: BlockPos, size: Vec3i): void;
    // private renderStructureVoids(state: BlockEntityWithBoundingBoxRenderState, startingPosition: BlockPos, size: Vec3i): void;
    shouldRender(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: BlockEntityWithBoundingBoxRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}