import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../../net/minecraft/client/model/Model.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { BannerFlagModel } from '../../../../../net/minecraft/client/model/object/banner/BannerFlagModel.d.ts'
import type { BannerModel } from '../../../../../net/minecraft/client/model/object/banner/BannerModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { WallAndGroundTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/WallAndGroundTransformations.d.ts'
import type { BannerRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BannerRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BannerBlock$AttachmentType } from '../../../../../net/minecraft/world/level/block/BannerBlock$AttachmentType.d.ts'
import type { BannerBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BannerBlockEntity.d.ts'
import type { BannerPatternLayers } from '../../../../../net/minecraft/world/level/block/entity/BannerPatternLayers.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class BannerRenderer extends Object implements BlockEntityRenderer<BannerBlockEntity, BannerRenderState> {
    static TRANSFORMATIONS: WallAndGroundTransformations<Transformation>;
    static submitPatterns<S extends unknown>(paramsprites: SpriteGetter, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramoverlayCoords: number, parammodel: Model<S>, paramstate: S, parambanner: boolean, parambaseColor: DyeColor, parampatterns: BannerPatternLayers, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor(modelSet: EntityModelSet, sprites: SpriteGetter)
    constructor(context: BlockEntityRendererProvider$Context)
    constructor(context: SpecialModelRenderer$BakingContext)
    // private sprites: SpriteGetter;
    // private standingFlagModel: BannerFlagModel;
    // private standingModel: BannerModel;
    // private wallFlagModel: BannerFlagModel;
    // private wallModel: BannerModel;
    // private bannerModel(type: BannerBlock$AttachmentType): BannerModel;
    createRenderState(): BannerRenderState;
    extractRenderState(blockEntity: BannerBlockEntity, state: BannerRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    // private flagModel(type: BannerBlock$AttachmentType): BannerFlagModel;
    getExtents(output: (param0: Vector3fc) => void): void;
    getViewDistance(): number;
    shouldRender(blockEntity: BannerBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: BannerRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitSpecial(type: BannerBlock$AttachmentType, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, baseColor: DyeColor, patterns: BannerPatternLayers, outlineColor: number): void;
}