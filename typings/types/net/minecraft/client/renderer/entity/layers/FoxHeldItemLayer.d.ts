import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { FoxModel } from '../../../../../../net/minecraft/client/model/animal/fox/FoxModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { FoxRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/FoxRenderState.d.ts'
export class FoxHeldItemLayer extends RenderLayer<FoxRenderState, FoxModel> {
    constructor(renderer: RenderLayerParent<FoxRenderState, FoxModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: FoxRenderState, yRot: number, xRot: number): void;
}