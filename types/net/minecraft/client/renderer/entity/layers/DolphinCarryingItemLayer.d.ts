import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { DolphinModel } from '../../../../../../net/minecraft/client/model/animal/dolphin/DolphinModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { DolphinRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DolphinRenderState.d.ts'
export class DolphinCarryingItemLayer extends RenderLayer<DolphinRenderState, DolphinModel> {
    constructor(renderer: RenderLayerParent<DolphinRenderState, DolphinModel>)
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: DolphinRenderState, yRot: number, xRot: number): void;
}