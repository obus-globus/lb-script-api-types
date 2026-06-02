import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SnowGolemModel } from '../../../../../../net/minecraft/client/model/animal/golem/SnowGolemModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { SnowGolemRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/SnowGolemRenderState.d.ts'
export class SnowGolemHeadLayer extends RenderLayer<SnowGolemRenderState, SnowGolemModel> {
    constructor(renderer: RenderLayerParent<SnowGolemRenderState, SnowGolemModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: SnowGolemRenderState, yRot: number, xRot: number): void;
}