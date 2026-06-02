import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { RenderLayer } from '../../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
export interface LivingEntityRenderLayerRegistrationCallback$RegistrationHelper extends Object{
    register(arg0: RenderLayer<T, EntityModel<T>>): void;
}