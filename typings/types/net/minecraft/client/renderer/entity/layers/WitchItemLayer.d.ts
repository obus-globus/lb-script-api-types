import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { WitchModel } from '../../../../../../net/minecraft/client/model/monster/witch/WitchModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { CrossedArmsItemLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/CrossedArmsItemLayer.d.ts'
import type { WitchRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/WitchRenderState.d.ts'
export class WitchItemLayer extends CrossedArmsItemLayer<WitchRenderState, WitchModel> {
    constructor(renderer: RenderLayerParent<WitchRenderState, WitchModel>)
    applyTranslation(state: WitchRenderState, poseStack: PoseStack): void;
}