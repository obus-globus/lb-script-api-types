import type { EndermanModel } from '../../../../../../net/minecraft/client/model/monster/enderman/EndermanModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EyesLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EyesLayer.d.ts'
import type { EndermanRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EndermanRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class EnderEyesLayer extends EyesLayer<EndermanRenderState, EndermanModel<EndermanRenderState>> {
    constructor(renderer: RenderLayerParent<EndermanRenderState, EndermanModel<EndermanRenderState>>)
    renderType(): RenderType;
}