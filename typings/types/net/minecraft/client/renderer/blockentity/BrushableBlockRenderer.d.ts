import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BrushableBlockRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BrushableBlockRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BrushableBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BrushableBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BrushableBlockRenderer extends Object implements BlockEntityRenderer<BrushableBlockEntity, BrushableBlockRenderState> {
    constructor(context: BlockEntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    createRenderState(): BrushableBlockRenderState;
    extractRenderState(blockEntity: BrushableBlockEntity, state: BrushableBlockRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender(blockEntity: BrushableBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: BrushableBlockRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    // private translations(direction: Direction, completionState: number): number[];
}