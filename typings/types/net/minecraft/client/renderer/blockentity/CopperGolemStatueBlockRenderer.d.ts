import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CopperGolemStatueModel } from '../../../../../net/minecraft/client/model/object/statue/CopperGolemStatueModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { CopperGolemStatueRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/CopperGolemStatueRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { CopperGolemStatueBlock$Pose } from '../../../../../net/minecraft/world/level/block/CopperGolemStatueBlock$Pose.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { CopperGolemStatueBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/CopperGolemStatueBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CopperGolemStatueBlockRenderer extends Object implements BlockEntityRenderer<CopperGolemStatueBlockEntity, CopperGolemStatueRenderState> {
    static modelTransformation(paramfacing: Direction): Transformation;
    constructor(context: BlockEntityRendererProvider$Context)
    // private models: { [key in CopperGolemStatueBlock$Pose]: CopperGolemStatueModel };
    createRenderState(): CopperGolemStatueRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: CopperGolemStatueBlockEntity, state: CopperGolemStatueRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: CopperGolemStatueRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}