import type { SpiderModel } from '../../../../../../net/minecraft/client/model/monster/spider/SpiderModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EyesLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EyesLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class SpiderEyesLayer<M extends SpiderModel> extends EyesLayer<LivingEntityRenderState, M> {
    constructor(renderer: RenderLayerParent<LivingEntityRenderState, M>)
    renderType(): RenderType;
}