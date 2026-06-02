import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { VillagerLikeModel } from '../../../../../../net/minecraft/client/model/VillagerLikeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { HoldingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HoldingEntityRenderState.d.ts'
export class CrossedArmsItemLayer<S extends HoldingEntityRenderState, M extends EntityModel<S> & VillagerLikeModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>)
    applyTranslation(state: S, poseStack: PoseStack): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}