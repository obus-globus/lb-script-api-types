import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModuleRotations$BodyPart } from '../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleRotations$BodyPart.d.ts'
import type { LivingEntityRendererAccessor } from '../../../../../net/fabricmc/fabric/mixin/client/rendering/LivingEntityRendererAccessor.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { RenderLayerParent } from '../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Tuple } from '../../../../../net/minecraft/util/Tuple.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export abstract class LivingEntityRenderer<T extends LivingEntity, S extends LivingEntityRenderState, M extends EntityModel<S>> extends EntityRenderer<T, S> implements LivingEntityRendererAccessor<LivingEntityRenderState, EntityModel<Object>>, RenderLayerParent<S, M> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M, shadow: number)
    // private itemModelResolver: ItemModelResolver;
    // private layers: RenderLayer<S, M>[];
    model: M;
    addLayer(layer: RenderLayer<S, M>): boolean;
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getBoundingBoxForCulling(entity: T): AABB;
    getFlipDegrees(): number;
    getModel(): M;
    getModelTint(state: S): number;
    // private getOverwriteRotation(arg0: ModuleRotations$BodyPart): Tuple<Object, Object>;
    getRenderType(state: S, isBodyVisible: boolean, forceTransparent: boolean, appearGlowing: boolean): RenderType;
    getShadowRadius(state: S): number;
    getTextureLocation(state: S): Identifier;
    getWhiteOverlayProgress(state: S): number;
    isBodyVisible(state: S): boolean;
    isEntityUpsideDown(mob: T): boolean;
    isShaking(state: S): boolean;
    scale(state: S, poseStack: PoseStack): void;
    setupRotations(state: S, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    shouldRenderLayers(state: S): boolean;
    shouldShowName(entity: T, distanceToCameraSq: number): boolean;
    submit(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}