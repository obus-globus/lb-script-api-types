import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mesh } from '../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { MeshView } from '../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { Font$DisplayMode } from '../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { SubmitNodeCollection } from '../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SubmitNodeCollector$CustomGeometryRenderer } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector$CustomGeometryRenderer.d.ts'
import type { SubmitNodeCollector$ParticleGroupRenderer } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector$ParticleGroupRenderer.d.ts'
import type { MovingBlockRenderState } from '../../../../net/minecraft/client/renderer/block/MovingBlockRenderState.d.ts'
import type { BlockStateModel } from '../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModelPart } from '../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { EntityRenderState$LeashState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$LeashState.d.ts'
import type { EntityRenderState$ShadowPiece } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$ShadowPiece.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { BakedQuad } from '../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { ItemDisplayContext } from '../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Quaternionf } from '../../../../org/joml/Quaternionf.d.ts'
export class SubmitNodeStorage extends Object implements SubmitNodeCollector {
    constructor()
    readonly submitsPerOrder: Int2ObjectAVLTreeMap<SubmitNodeCollection>;
    clear(): void;
    endFrame(): void;
    getSubmitsPerOrder(): Int2ObjectAVLTreeMap<SubmitNodeCollection>;
    order(order: number): SubmitNodeCollection;
    submitBlockModel(arg0: PoseStack, arg1: (param0: Object) => Object, arg2: boolean, arg3: (Object | null)[], arg4: Mesh, arg5: number[], arg6: number, arg7: number, arg8: number): void;
    submitBlockModel(poseStack: PoseStack, renderType: RenderType, modelParts: BlockStateModelPart[], tintLayers: number[], lightCoords: number, overlayCoords: number, outlineColor: number): void;
    submitBreakingBlockModel(poseStack: PoseStack, model: BlockStateModel, seed: number, progress: number): void;
    submitCustomGeometry(poseStack: PoseStack, renderType: RenderType, customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer): void;
    submitFlame(poseStack: PoseStack, renderState: EntityRenderState, rotation: Quaternionf): void;
    submitItem(poseStack: PoseStack, displayContext: ItemDisplayContext, lightCoords: number, overlayCoords: number, outlineColor: number, tintLayers: number[], quads: BakedQuad[], foilType: ItemStackRenderState$FoilType): void;
    submitItem(arg0: PoseStack, arg1: ItemDisplayContext, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: (Object | null)[], arg7: MeshView, arg8: ItemStackRenderState$FoilType): void;
    submitLeash(poseStack: PoseStack, leashState: EntityRenderState$LeashState): void;
    submitModel<S extends Object | number | string | boolean>(model: Model<S>, state: S, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, tintedColor: number, sprite: TextureAtlasSprite, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite, sheeted: boolean, hasFoil: boolean, tintedColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay, outlineColor: number): void;
    submitMovingBlock(poseStack: PoseStack, movingBlockRenderState: MovingBlockRenderState): void;
    submitNameTag(poseStack: PoseStack, nameTagAttachment: Vec3, offset: number, name: Component, seeThrough: boolean, lightCoords: number, distanceToCameraSq: number, camera: CameraRenderState): void;
    submitParticleGroup(particleGroupRenderer: SubmitNodeCollector$ParticleGroupRenderer): void;
    submitShadow(poseStack: PoseStack, radius: number, pieces: EntityRenderState$ShadowPiece[]): void;
    submitText(poseStack: PoseStack, x: number, y: number, string: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, dropShadow: boolean, displayMode: Font$DisplayMode, lightCoords: number, color: number, backgroundColor: number, outlineColor: number): void;
}