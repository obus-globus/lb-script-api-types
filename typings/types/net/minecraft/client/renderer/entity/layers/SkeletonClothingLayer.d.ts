import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ModelLayerLocation } from '../../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { SkeletonModel } from '../../../../../../net/minecraft/client/model/monster/skeleton/SkeletonModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { SkeletonRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SkeletonRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SkeletonClothingLayer<S extends SkeletonRenderState, M extends EntityModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>, models: EntityModelSet, layerLocation: ModelLayerLocation, clothesLocation: Identifier)
    // private clothesLocation: Identifier;
    // private layerModel: SkeletonModel<S>;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}