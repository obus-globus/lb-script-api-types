import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LivingEntityRenderLayerRegistrationCallback$RegistrationHelper } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/LivingEntityRenderLayerRegistrationCallback$RegistrationHelper.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class RegistrationHelperImpl extends Object implements LivingEntityRenderLayerRegistrationCallback$RegistrationHelper {
    constructor(arg0: (param0: RenderLayer<Object, Object>) => boolean)
    // private delegate: (param0: RenderLayer<Object, Object>) => boolean;
    register<T extends EntityRenderState>(arg0: RenderLayer<T, EntityModel<T>>): void;
}