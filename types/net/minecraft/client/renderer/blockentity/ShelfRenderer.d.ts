import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ShelfRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/ShelfRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { ItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ShelfRenderer extends Object implements BlockEntityRenderer<(Object | null)[], ShelfRenderState> {
    constructor(context: BlockEntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    createRenderState(): ShelfRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: (Object | null)[], state: ShelfRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: ShelfRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    // private submitItem(state: ShelfRenderState, itemStackRenderState: ItemStackRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, slot: number, yRot: number): void;
}