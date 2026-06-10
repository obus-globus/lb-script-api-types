import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { CampfireRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/CampfireRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { CampfireBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/CampfireBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CampfireRenderer extends Object implements BlockEntityRenderer<CampfireBlockEntity, CampfireRenderState> {
    constructor(context: BlockEntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    createRenderState(): CampfireRenderState;
    extractRenderState(blockEntity: CampfireBlockEntity, state: CampfireRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender(blockEntity: CampfireBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: CampfireRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}