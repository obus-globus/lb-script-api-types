import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EndermanModel } from '../../../../../../net/minecraft/client/model/monster/enderman/EndermanModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { EndermanRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EndermanRenderState.d.ts'
export class CarriedBlockLayer extends RenderLayer<EndermanRenderState, EndermanModel<EndermanRenderState>> {
    constructor(renderer: RenderLayerParent<EndermanRenderState, EndermanModel<EndermanRenderState>>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: EndermanRenderState, yRot: number, xRot: number): void;
}