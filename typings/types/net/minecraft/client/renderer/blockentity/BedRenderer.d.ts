import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BedRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BedRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BedBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BedBlockEntity.d.ts'
import type { BedPart } from '../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class BedRenderer extends Object implements BlockEntityRenderer<BedBlockEntity, BedRenderState> {
    static createFootLayer(): LayerDefinition;
    static createHeadLayer(): LayerDefinition;
    static modelTransform(paramdirection: Direction): Transformation;
    constructor(context: BlockEntityRendererProvider$Context)
    constructor(context: SpecialModelRenderer$BakingContext)
    constructor(sprites: SpriteGetter, entityModelSet: EntityModelSet)
    // private footModel: Model$Simple;
    // private headModel: Model$Simple;
    // private sprites: SpriteGetter;
    createRenderState(): BedRenderState;
    extractRenderState(blockEntity: BedBlockEntity, state: BedRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getExtents(part: BedPart, output: (param0: Vector3fc) => void): void;
    // private getPieceModel(part: BedPart): Model$Simple;
    getViewDistance(): number;
    shouldRender(blockEntity: BedBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: BedRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitPiece(part: BedPart, sprite: SpriteId, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, breakProgress: ModelFeatureRenderer$CrumblingOverlay, outlineColor: number): void;
}