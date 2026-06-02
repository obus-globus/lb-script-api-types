import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PandaModel } from '../../../../../../net/minecraft/client/model/animal/panda/PandaModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { PandaRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/PandaRenderState.d.ts'
export class PandaHoldsItemLayer extends RenderLayer<PandaRenderState, PandaModel> {
    constructor(renderer: RenderLayerParent<PandaRenderState, PandaModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: PandaRenderState, yRot: number, xRot: number): void;
}