import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Font$DisplayMode } from '../../../../net/minecraft/client/gui/Font$DisplayMode.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { OrderedSubmitNodeCollector } from '../../../../net/minecraft/client/renderer/OrderedSubmitNodeCollector.d.ts'
import type { SubmitNodeCollector$CustomGeometryRenderer } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector$CustomGeometryRenderer.d.ts'
import type { MovingBlockRenderState } from '../../../../net/minecraft/client/renderer/block/MovingBlockRenderState.d.ts'
import type { EntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { EntityRenderState$LeashState } from '../../../../net/minecraft/client/renderer/entity/state/EntityRenderState$LeashState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { DrawableGizmoPrimitives$Group } from '../../../../net/minecraft/client/renderer/gizmos/DrawableGizmoPrimitives$Group.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { QuadParticleRenderState } from '../../../../net/minecraft/client/renderer/state/level/QuadParticleRenderState.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { SpriteGetter } from '../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
import type { Quaternionf } from '../../../../org/joml/Quaternionf.d.ts'
export interface SubmitNodeCollector extends Object, OrderedSubmitNodeCollector {
    order(order: number): OrderedSubmitNodeCollector;
    submitCustomGeometry(poseStack: PoseStack, renderType: RenderType, customGeometryRenderer: SubmitNodeCollector$CustomGeometryRenderer): void;
    submitFlame(poseStack: PoseStack, renderState: EntityRenderState, rotation: Quaternionf): void;
    submitGizmoPrimitives(group: DrawableGizmoPrimitives$Group, camera: CameraRenderState, onTop: boolean): void;
    submitLeash(poseStack: PoseStack, leashState: EntityRenderState$LeashState): void;
    submitModel<S extends unknown>(model: Model<S>, state: S, poseStack: PoseStack, lightCoords: number, overlayCoords: number, tintedColor: number, sprite: SpriteId, sprites: SpriteGetter, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModel<S extends unknown>(model: Model<S>, state: S, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModel<S extends unknown>(model: Model<S>, state: S, poseStack: PoseStack, texture: Identifier, lightCoords: number, overlayCoords: number, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite, tintedColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite, tintedColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay, outlineColor: number): void;
    submitMovingBlock(poseStack: PoseStack, movingBlockRenderState: MovingBlockRenderState, outlineColor: number): void;
    submitNameTag(poseStack: PoseStack, nameTagAttachment: Vec3, offset: number, name: Component, seeThrough: boolean, lightCoords: number, camera: CameraRenderState): void;
    submitQuadParticleGroup(particles: QuadParticleRenderState): void;
    submitShapeOutline(poseStack: PoseStack, shape: VoxelShape, renderType: RenderType, color: number, width: number, afterTerrain: boolean): void;
    submitText(poseStack: PoseStack, x: number, y: number, string: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean, dropShadow: boolean, displayMode: Font$DisplayMode, lightCoords: number, color: number, backgroundColor: number, outlineColor: number): void;
}