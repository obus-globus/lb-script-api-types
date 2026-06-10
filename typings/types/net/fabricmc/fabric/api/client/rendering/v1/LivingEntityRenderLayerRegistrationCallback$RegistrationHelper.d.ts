import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntityModel } from '../../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { RenderLayer } from '../../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { EntityRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export interface LivingEntityRenderLayerRegistrationCallback$RegistrationHelper extends Object{
    register<T extends EntityRenderState>(arg0: RenderLayer<T, EntityModel<T>>): void;
}