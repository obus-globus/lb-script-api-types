import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { WolfModel } from '../../../../../../net/minecraft/client/model/animal/wolf/WolfModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { WolfRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
export class WolfCollarLayer extends RenderLayer<WolfRenderState, WolfModel> {
    constructor(renderer: RenderLayerParent<WolfRenderState, WolfModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: WolfRenderState, yRot: number, xRot: number): void;
}