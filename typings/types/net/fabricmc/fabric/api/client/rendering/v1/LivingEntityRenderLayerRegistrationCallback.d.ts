import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LivingEntityRenderLayerRegistrationCallback$RegistrationHelper } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/LivingEntityRenderLayerRegistrationCallback$RegistrationHelper.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderer } from '../../../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { EntityType } from '../../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface LivingEntityRenderLayerRegistrationCallback extends Object{
    registerLayers(arg0: EntityType<LivingEntity>, arg1: LivingEntityRenderer<any, any, any>, arg2: LivingEntityRenderLayerRegistrationCallback$RegistrationHelper, arg3: EntityRendererProvider$Context): void;
}