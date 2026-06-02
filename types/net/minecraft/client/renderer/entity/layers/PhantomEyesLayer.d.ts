import type { PhantomModel } from '../../../../../../net/minecraft/client/model/monster/phantom/PhantomModel.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { EyesLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/EyesLayer.d.ts'
import type { PhantomRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/PhantomRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class PhantomEyesLayer extends EyesLayer<PhantomRenderState, PhantomModel> {
    constructor(renderer: RenderLayerParent<PhantomRenderState, PhantomModel>)
    renderType(): RenderType;
}