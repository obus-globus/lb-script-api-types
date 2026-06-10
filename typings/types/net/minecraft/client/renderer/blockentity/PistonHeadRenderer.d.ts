import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { PistonHeadRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/PistonHeadRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { PistonMovingBlockEntity } from '../../../../../net/minecraft/world/level/block/piston/PistonMovingBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PistonHeadRenderer extends Object implements BlockEntityRenderer<PistonMovingBlockEntity, PistonHeadRenderState> {
    constructor()
    createRenderState(): PistonHeadRenderState;
    extractRenderState(blockEntity: PistonMovingBlockEntity, state: PistonHeadRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender(blockEntity: PistonMovingBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: PistonHeadRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}