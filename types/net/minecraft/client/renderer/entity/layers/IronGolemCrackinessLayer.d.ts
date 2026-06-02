import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { IronGolemModel } from '../../../../../../net/minecraft/client/model/animal/golem/IronGolemModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { IronGolemRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/IronGolemRenderState.d.ts'
export class IronGolemCrackinessLayer extends RenderLayer<IronGolemRenderState, IronGolemModel> {
    constructor(renderer: RenderLayerParent<IronGolemRenderState, IronGolemModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: IronGolemRenderState, yRot: number, xRot: number): void;
}