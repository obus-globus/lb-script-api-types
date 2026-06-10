import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { ShulkerBoxRenderer$ShulkerBoxModel } from '../../../../../net/minecraft/client/renderer/blockentity/ShulkerBoxRenderer$ShulkerBoxModel.d.ts'
import type { ShulkerBoxRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/ShulkerBoxRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ShulkerBoxRenderer extends Object implements BlockEntityRenderer<(Object | null)[], ShulkerBoxRenderState> {
    static modelTransform(paramdirection: Direction): Transformation;
    constructor(context: EntityModelSet, sprites: SpriteGetter)
    constructor(context: BlockEntityRendererProvider$Context)
    constructor(context: SpecialModelRenderer$BakingContext)
    // private model: ShulkerBoxRenderer$ShulkerBoxModel;
    // private sprites: SpriteGetter;
    createRenderState(): ShulkerBoxRenderState;
    extractRenderState(blockEntity: (Object | null)[], state: ShulkerBoxRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getExtents(progress: number, output: (param0: Vector3fc) => void): void;
    getViewDistance(): number;
    shouldRender(blockEntity: (Object | null)[], cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, progress: number, breakProgress: ModelFeatureRenderer$CrumblingOverlay, sprite: SpriteId, outlineColor: number): void;
    // private submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, direction: Direction, progress: number, breakProgress: ModelFeatureRenderer$CrumblingOverlay, sprite: SpriteId, outlineColor: number): void;
    submit(state: ShulkerBoxRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}