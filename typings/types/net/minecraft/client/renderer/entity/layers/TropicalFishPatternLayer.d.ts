import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { TropicalFishLargeModel } from '../../../../../../net/minecraft/client/model/animal/fish/TropicalFishLargeModel.d.ts'
import type { TropicalFishSmallModel } from '../../../../../../net/minecraft/client/model/animal/fish/TropicalFishSmallModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { TropicalFishRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/TropicalFishRenderState.d.ts'
export class TropicalFishPatternLayer extends RenderLayer<TropicalFishRenderState, EntityModel<TropicalFishRenderState>> {
    constructor(renderer: RenderLayerParent<TropicalFishRenderState, EntityModel<TropicalFishRenderState>>, modelSet: EntityModelSet)
    // private modelLarge: TropicalFishLargeModel;
    // private modelSmall: TropicalFishSmallModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: TropicalFishRenderState, yRot: number, xRot: number): void;
}