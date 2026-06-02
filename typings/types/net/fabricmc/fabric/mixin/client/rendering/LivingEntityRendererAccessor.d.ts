import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
export interface LivingEntityRendererAccessor<S extends LivingEntityRenderState, M extends EntityModel<S>> extends Object{
    callAddLayer(arg0: RenderLayer<S, M>): boolean;
}