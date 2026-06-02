import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { OrderedSubmitNodeCollector } from '../../../../net/minecraft/client/renderer/OrderedSubmitNodeCollector.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { SpriteGetter } from '../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface SubmitNodeCollector extends Object, OrderedSubmitNodeCollector{
    order(order: number): OrderedSubmitNodeCollector;
    submitModel<S extends Object | number | string | boolean>(model: Model<S>, state: S, poseStack: PoseStack, lightCoords: number, overlayCoords: number, tintedColor: number, sprite: SpriteId, sprites: SpriteGetter, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModel<S extends Object | number | string | boolean>(model: Model<S>, state: S, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModel<S extends Object | number | string | boolean>(model: Model<S>, state: S, poseStack: PoseStack, texture: Identifier, lightCoords: number, overlayCoords: number, outlineColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite, sheeted: boolean, hasFoil: boolean): void;
    submitModelPart(modelPart: ModelPart, poseStack: PoseStack, renderType: RenderType, lightCoords: number, overlayCoords: number, sprite: TextureAtlasSprite, tintedColor: number, crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay): void;
}